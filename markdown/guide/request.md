---
order: 1
toc: content
---

# 接口请求 request

`request`是一个功能强大的通用API请求函数，基于`fetch`进一步封装，主要特点：

* 使用简单，高度集成，只暴露几个简单的参数，内置参数加工、loading处理、异常兜底toast等逻辑；
* 基于现代化的`fetch`，同时开放所有底层配置，足够灵活；
* 倡导用“同步”的思想去写异步代码，发生异常默认中断执行，开发者只需要关注成功处理逻辑，默认情况下无需处理异常，无需`try-catch`；
* 内置强大的`mock`处理能力；

## 如何使用

`requestOptions`完整参数详见[这里](/api/interfaces/i-request-options)。

```js
import { request } from 'youtil';
const data = await request(url, requestOptions);
```

## 典型示例

```jsx preview
import { request, mockRequest } from 'youtil';
import { useEffect } from 'react';

mockRequest('testSuccess.json', {
  code: 0,
  data: 123,
});


mockRequest('testError.json', {
  code: 500,
  message: '服务器跪了',
});

export default () => {
  const test = async (url) => {
    const resp = await request(url, {
      toastHandler: msg => alert('报错啦啦啦：' + msg),
    });
    alert('接口成功返回：' + resp);
  };
  return <div>
    <a href="javascript:;" onClick={() => test('testSuccess.json')}>发起成功请求</a>
    &nbsp;
    <a href="javascript:;" onClick={() => test('testError.json')}>发起失败请求</a>
  </div>;
}
```

## 定义toastHandler（重要）

请求函数默认不包含任何UI库，所以使用前必须定义`toastHandler`（发生异常时调用）：

```js
await request('xxx', { toastHandler: (message) => Toast.show({ title: message, icon: 'error' }) });
```

当然实际使用中您不需要每次调用时都传入`toastHandler`，继续往下阅读【自定义实例】了解如何定制化一个专属`request`。

## 自定义实例

我们的`request`有大量默认值，一般不同的项目都希望按工程维度覆盖一些默认值，您可以通过`request.create(options)`创建一个新的request方法，用来覆盖默认配置，当然，新创建出来的`request`还可以继续链式调用`create()`。

```js
import { request as rawRequest } from 'youtil';

// 设置 toastHandler 默认值
const request1 = rawRequest.create({
  toastHandler: (message) => Toast.show({ title: message, icon: 'error' })
});
// 在上面的 request1 基础之上继续设置默认值
const request2 = request1.create({
  baseUrl: 'http://xxx.com',
});
// 每个返回的request都可以继续create，新的配置会和旧配置合并
const request3 = request2.create({
  baseUrl: 'http://ooo.com',
});
```

## loading处理

接口请求有个非常普遍的诉求：请求开始显示loading，请求结束无论成功与否关闭loading，为方便使用，`request`内置了`setLoading`钩子：

```js
const [loading, setLoading] = useState(false);
// 请求结束后，无论成功还是失败，setLoading(false) 都会被调用
await request('xxx', { setLoading });
```

## 异常处理

### 非标场景兼容（重要必看）

我们会默认假设响应满足如下结构：

```ts
export interface IResponse {
  /** 是否成功 */
  code: number;
  /** 返回的内容 */
  data?: any;
  /** 异常文案 */
  message?: string;
}
```

`request`库包含了一些默认逻辑：

* 判断接口是否调用成功，默认规则: `resp?.code == 0 || resp?.code == 200`，如果您的接口不满足此规则可通过`checkSuccess(resp) => boolean`钩子进行自定义；
* 如果调用成功，会仅返回`resp.data`，注意，不是返回整个`resp`，而是仅返回`resp.data`；
* 如果失败，默认会`toast`异常，异常文案取值逻辑：`options.overrideMessage || resp.message || options.defaultErrorMessage`，其中，`overrideMessage`支持传入函数；

除了可以用`checkSuccess`对成功判断进行自定义外，你还可以通过`responseConverter`进行更灵活的加工处理以满足上述结构：

```js
const responseConverter = resp => {
  if (resp) {
    resp.code = resp.success ? 0 : 500;
    resp.message = resp.msg;
  }
  return resp;
};
await request('xxx', { responseConverter });
```

### 默认异常文案

如果你设置了`toastHandler`，发生异常时会默认`toast(resp.message || options.defaultErrorMessage)`。

### 自定义异常文案

如果某个接口你希望完全自定义异常文案（比如不希望把真实原因告知用户），可以通过`overrideMessage`来覆盖默认异常文案(此时会完全忽略后端返回的`resp.message`)：

```js
await request('xxx', { overrideMessage: '查询数据异常' });
```

当然，也支持根据`resp`去完全自定义异常文案：

```js
const overrideMessage = resp => {
  if (resp.code === 10001) {
    return '您的账号异常，请联系客服处理！';
  }
  return resp?.message === '系统繁忙' ? '活动太火爆，稍后再试吧' : resp?.message;
};
await request('xxx', { overrideMessage });
```

### 自定义兜底文案

`overrideMessage`一般用于具体某个接口的特殊处理，另外还有一个全局的兜底异常文案，当后端没有返回`resp.message`会用到，可以通过`defaultErrorMessage`进行设置。

```js
import { request as rawRequest } from '@jdcc/utils';

const request = rawRequest.create({
  toastHandler: (message) => Toast.show({ title: message, icon: 'error' }),
  defaultErrorMessage: '活动火爆，稍后再试吧！',
});
```

### 静默请求（不透出异常）

有些时候可能不关注请求异常，期望发生异常时不告知用户，此时可以设置`silent: true`（其实`overrideMessage: ''`也可以实现类似诉求）：

```js
await request('xxx', { silent: true });
```

### 完全自定义异常处理

如果你还有更灵活的自定义异常处理诉求，比如某个文案用dialog，某些文案用toast，亦或者某些异常需要进行登录处理，可以用`errorHandler`钩子（一般不建议设置，除非确有必要）：

```js
const errorHandler = (message: string, resp: any, options) => {
  if (resp?.code === '10002') {
    Dialog.alert({ title: '您还没有登录，点击确定按钮去登录！' });
  } else if (!options?.silent) {
    // 不要漏了 options?.silent 判断，否则 silent 配置无法生效
    Toast.show({ title: message, icon: 'error' });
  }
  // 抛出异常，阻止执行之后的操作，这行代码千万不要漏了！
  throw new Error(message);
}
await request('xxx', { errorHandler });
```

## 自定义baseUrl

```js
setLoading(true);
const baseUrl= '//xxx.jd.com';
await request('xxx', { baseUrl });
```

## 自定义 fetch 配置

允许自定义fetch所有配置，优先级最高；

```js
setLoading(true);
const fetchOptions = {
};
await request('xxx', { fetchOptions });
```

## 异常中断执行

异常中断执行是通过`errorHandler`中的`throw new Error`实现的：

```js
await request('xxx');
console.log('如果发生异常，这条console.log不会执行');
```

这种情况下控制台会产生一条未处理的异常日志，如果确实有强迫症不喜欢这种模式，`request`也是支持`try-catch`的：

```js
try {
  await request('xxx');
} catch (e) {
}
console.log('如果发生异常，这条console.log仍然会执行');
```

## 不同请求方式

### GET请求

传入`params`参数会默认按照`GET`处理：

```js
const params = {};
await request('xxx', { params });
```

### POST请求

传入`data`参数会默认按照`POST`处理：

```js
const data = {};
await request('xxx', { data });
```

### PostJson请求

传入`json`参数会默认按照`postJson`模式处理：

> 所谓`postJson`模式：`POST` + `Content-Type: 'application/json'`：

```js
const json = {};
await request('xxx', { json });
```

### formData模式

通过`formData`可以传一些二进制流，比如文件（注意浏览器会自动设置`content-type: multipart/form-data`，您无需手动设置）：

```js
const formData = {
  file: SomeFile,
};
await request('xxx', { formData });
```

## 自定义headers

```js
await request('xxx', { headers: { 'x-test': '123' } });
```

## abort 请求终止

```jsx preview
import { request, mockRequest } from 'youtil';
import { useEffect } from 'react';

export default () => {
  const test = async () => {
    const controller = new AbortController();
    request('xxx', { signal: controller.signal });
    controller.abort('用户主动取消请求');
  };
  return <div>
    <a href="javascript:;" onClick={test}>测试abort</a>
  </div>;
}
```

## mockRequest

通过`mockRequest(url, ({ url, params, method }) => resp)`可以实现兼容性良好的`mock`功能，无论是`xhr`还是`fetch`都能兼容，由于不会对`xhr`或`fetch`进行重写，所以即使发布到生产环境关系也不大。

注意，回调中的`params`已经过特殊处理，无论是`get`还是`post`还是`postJson`都会把参数正确解析到`params`中。

```jsx preview
import { request, mockRequest } from 'youtil';
import { useEffect } from 'react';

mockRequest('/mockTest', ({ params }) => {
  console.log(333, params);
  return {
    code: 0,
    data: 123,
  }
});
export default () => {
  const test = async () => {
    const data = await request('/mockTest', { data: {a: 1} });
    alert(`接口返回：${data}`);
  };
  return <div>
    <a href="javascript:;" onClick={test}>测试mock能力</a>
  </div>;
}
```
