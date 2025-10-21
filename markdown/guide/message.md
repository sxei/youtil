---
toc: content
title: 窗口通信
order: 2
---

# 前言

众所周知，跨域窗口通信（例如父页面和iframe子页面、当前页和window.oepn打开页等）一般都是通过`window.postMessage`和`window.onmessage`实现，一个用来发送消息，一个用来接收消息，他们既不支持回调，也不支持异步，更有一堆的使用限制（例如只能传递普通数据，无法序列化的数据不能被发送），直接使用非常不方便。

> Chrome插件开发中的contentScripts和普通scripts也是基于`postMessage`通信。

# 优势

基于以上痛点，笔者对消息通信进行了整体封装，封装使用非常简单，并且具有以下特点：

* 支持回调；
* 支持异步；
* 支持抛出异常；
* 支持将函数作为参数传递；
* 无需手动设置`targetWindow`，90%场景自动捕获；
* 消息监听同时支持精确匹配和模糊匹配；

行了，不吹牛逼了，直接上菜。只有一个方法 `initWindowMessage(scene)`：

```js
import { initWindowMessage } from 'youtil';
// scene用来标识场景，只有scene相同的2个窗口发送消息才能接收到
const { postMessage, onMessage, offMessage } = initWindowMessage('your_scene');
```

完整定义：

```js
type onMessageListener = (eventName?: string, ...payload: any[]) => Promise<any> | any | void;

/**
 * 初始化窗口通信
 * @param {string} scene 场景，必传，互相通信的2个窗口必须保证 scene 相同
 * @param {Window} targetWindow 目标窗口对象(父窗口或子窗口)，互相通信时允许有一方不传，自动从 event.source 获取
 * @returns {{postMessage: function, onMessage: function}} 返回postMessage和onMessage方法
 */
function initWindowMessage(scene: string, targetWindow?: Window): {
	/**
	 * 向目标窗口发送一条消息（触发一个事件），支持异步回调
	 * @param eventName 事件名
	 * @param payload 要传递的参数，支持传入多个
	 * @returns 异步回调
	 */
	postMessage: <T>(eventName: string, ...payload: any[]) => Promise<T>;
	/**
	 * 监听消息
	 * @param {string} eventName 事件名称
	 * @param {function} listener 监听函数(支持异步)：(...params) => callbackValue
	 */
	onMessage: (eventName: string, listener: onMessageListener) => void;
	/**
	 * 取消消息监听事件绑定
	 * @param eventName 要取消的事件名，如果不传，取消所有消息监听
	 * @param listener 要取消的具体监听方法，如果不传，取消所有名为 eventName 的事件
	 */
	offMessage: (eventName?: string, listener?: onMessageListener) => void;
}
```

# 如何使用

先看使用，再看原理。

## 异步回调

以最典型的iframe父子页面通信为例（其它场景类似）：

父页面：

```js
const { postMessage, onMessage } = initWindowMessage('test_iframe');
// 假设父页面有一个名为test的异步方法，我们希望子iframe也能够调用
const test = async (a, b) => {
	await sleep(1000);
	return a + b;
};
onMessage('test', test);
```

子iframe页面：

```js
const { postMessage, onMessage } = initWindowMessage('test_iframe');
const result = await postMessage('test', 2, 3);
console.log(result); // 延迟1秒输出5
```

## 异常回调

继续完善上面的例子，父页面：

```js
const { postMessage, onMessage } = initWindowMessage('test_iframe');
// 假设父页面有一个名为test的异步方法
const test = async (a, b) => {
	await sleep(1000);
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw new Error('参数不是数字')
	}
	return a + b;
};
onMessage('test', test)
```

子iframe页面：

```js
const { postMessage, onMessage } = initWindowMessage('test_iframe');
try {
	const result = await postMessage('test', 'aaa', 3);
	console.log(result);
} catch (e) {
	console.error(e); // 延迟1秒抛出异常：参数不是数字
}
```

## 函数作为参数传递

默认情况下，`postMessage`传递的参数必须是可以序列化的，任何不能序列化的数据（比如某个`DOM`对象、函数、循环引用对象、甚至是`moment()`返回的对象）都会报如下异常：

	Uncaught (in promise) DataCloneError: Failed to execute 'postMessage' on 'Window'

无法传递特殊对象这个还能接受，唯独不能传递函数这个着实非常不方便，要知道我们经常会把一些类似`onOk`、`onCancel`、`onUpdate`等作为参数传递。但是在我们这里函数参数不受任何影响，依然可以正常传递：

父页面：

```js
const { postMessage, onMessage } = initWindowMessage('test_iframe');
const showDialog = async ({ title, content, onOk }) => {
	Modal.confirm({
		title,
		content,
		onOk,
	});
};
onMessage('showDialog', showDialog)
```

子iframe页面：

```js
const { postMessage, onMessage } = initWindowMessage('test_iframe');
postMessage('showDialog', {
	title: '我是标题',
	// 函数不受影响，可以正常作为参数传递
	onOk: async () => {
		await sleep(1000);
		console.log('点击了确定按钮');
	}
});
```

具体实现原理见后文。

## 支持模糊匹配

除此之外还支持`*`模糊匹配，一般建议最多只监听一次：

```js
onMessage('*', (eventName, ...params) => {
	console.log(eventName, ...params);
});
```

和普通onMessage不同的地方：

* 第一个参数变成了`eventName`；
* 必须要有返回值才会触发回调；
# 如何实现

## 如何传递函数参数

如何解决呢？首先想到的是强行序列化，比如直接传递`function test(a, b) { return a + b; }`这样的字符串，接收到后再`new Function`实例化，这种方式使用限制非常多，一个函数可能依赖其它方法、依赖外部npm包，甚至可能依赖本地某个无法序列化的数据，所以此路不通。

考虑到函数的主要作用还是执行一段逻辑再返回结果，既然我们无法直接传递函数，那么我们可以变相的传递函数执行结果，函数执行依然在原来的窗口，`postMessage`前先把函数在本地缓存起来、并用一个随机的`functionId`标识，执行的时候再通过这个`functionId`把缓存的函数取出来！

假设有一个`onUpdate`方法需要传递：

```js
postMessage('someMethod', onUpdate);
```

大致原理如下图：

![image.png](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2025-05-21-11-00UeUiv6be7dsyBm6.png)

发送前我们先把onUpdate在本地存储起来，并用一个唯一的functionId做标识：

```js
const localFunctions: Record<string, Function> = {};
const fnPrefix = '_local_function_';
// 存储函数
function storageFunction(fn: Function) {
  const functionId = `${fnPrefix}${getRandomId()}`;
  localFunctions[functionId] = fn;
  return functionId;
}
```

底层传递过去的`onUpdate`实际上一个字符串，类似这样`_local_function_xxxx`，但用户使用我们的onMessage接收到的仍然是一个正常的函数，只不过被我们包装了一层：

```js
const onUpdate = (...params) => {
	// 再次调用封装好的postMessage发送消息到原窗口获取并执行本地缓存的函数
	return postMessage('executeLocalFunction', '_local_function_xxxx', ...params)
}
```

`executeLocalFunction`大致逻辑如下:

```js
onMessage('executeLocalFunction', (functionId, ...params) => {
  if (!localFunctions[functionId]) throw new Error('未找到本地缓存方法：' + functionId);
  return localFunctions[functionId](...params);
});
```

至此，我们完美地实现了任意函数参数传递，并且同样支持异步回调，**上述转换过程用户不需要做任何处理也没有任何感知！！！** 给用户的感觉就是函数被直接传递过去了！

为了进一步使用方便，还可以给对象类型加上递归判断处理。


## 如何自动捕获目标窗口

首先，通过window.parent或者window.opener可以自动拿到另外一方的target：

```js
// iframe模式下自动设置目标窗口
if (!targetWindow && window !== window.parent) {
  targetWindow = window.parent;
}
// window.open模式下自动设置目标窗口
if (!targetWindow && window.opener) {
  targetWindow = window.opener;
}
```

然后每次初始化时底层会自动互相发送一条`auto-connect`消息，2个窗口初始化一定有一个先后顺序，后初始化的发送消息后一定会被监听，监听的时候我们把`event.source`存储起来作为下次`postMessage`的`targetWindow`使用，这样就可以实现目标窗口自动捕获。

## iframe页面跳转兼容

一个典型场景是父页面保持不变，子iframe会经常跳来跳去，这个时候需要重复初始化`initWindowMessage`么？没关系，得益于目标窗口的自动捕获，这些都会被自动处理。

## API

点此查看[API](/api/functions/init-window-message)文档。