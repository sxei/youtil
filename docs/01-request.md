
# request

`request`是一个功能强大的API请求函数，主要特点：

* 使用简单，高度集成，只暴露几个简单的参数，内置了参数处理、异常兜底处理等；
* 基于现代化的`fetch`，并开放所有底层配置；
* 倡导用“同步”的思想去写异步代码，发生异常默认中断执行，开发者只需要关注成功处理逻辑，理想情况下无需关心异常兜底，无需`try-catch`；

## 如何使用

`requestOptions`完整参数详见[这里](/docs/api/interfaces/IRequestOptions)。

```js
import { request } from 'youtil';
const data = await requestAPI(url, requestOptions);
```

## 典型示例

使用`requestAPI`封装的方法后：

```js
setLoading(true);
const afterRequest = () => setLoading(false);
const data = await doGetVideoHBCW({ activitySource: 1 }, { afterRequest });
// 默认已经进行了异常兜底处理，此处的data直接指向 resp.data
setData(data);
```

## 自定义异常兜底文案

```js
await requestAPI('xxx', { errorMessage: '系统繁忙，稍后再试！' });
```

## 自定义异常处理

```js
const errorHandler = (message: string, resp: any) => {
  if (resp?.busiCode === '3') {
    Toast.show({ title: '我是自定义特殊异常', icon: 'error' });
  }
  Toast.show({ title: message, icon: 'error' });
  // 抛出异常，阻止执行之后的操作
  throw new Error(message);
}
await requestAPI('xxx', { errorHandler });
```


## 静默请求

有些时候可能不关注请求异常，期望发生异常时不告知用户：

```js
await requestAPI('xxx', { silent: true });
```


## loading处理

一般在请求开始显示loading，请求结束无论成功与否关闭loading，可以使用`afterRequest`钩子：

```js
setLoading(true);
const afterRequest = (success: boolean, resp: any) => setLoading(false); 
await requestAPI('xxx', { afterRequest });
```

## 自定义baseURL

```js
setLoading(true);
const baseURL= '//xxx.jd.com';
await requestAPI('xxx', { baseURL });
```

## 自定义 axios 配置

```js
setLoading(true);
const axiosOptions = {
  timeout: 30000,
};
await requestAPI('xxx', { axiosOptions });
```

## 非标场景兼容

requestAPI默认要求响应需要满足：

```ts
export interface IResponse {
  // 为0表示成功
  busiCode?: string;
  // 为0表示成功
  resultCode?: string;
  data: any;
  message?: string;
}
```

对于非标返回可以通过`responseConverter`进行格式化后兼容：

```js
const responseConverter = resp => {
  if (resp) {
    resp.resultCode = resp.xxxCode;
  }
  return resp;
};
await requestAPI('xxx', { responseConverter });
```

## 异常中断执行

异常中断执行是通过`errorHandler`中的`throw new Error`实现的：

```js
await requestAPI('xxx');
console.log('如果发生异常，这条console.log不会执行');
```

这种情况下控制台会产生一条未处理的异常日志，如果确实有强迫症不喜欢这种模式，`requestAPI`也是支持`try-catch`的：

```js
try {
  await requestAPI('xxx');
} catch (e) {
}
console.log('如果发生异常，这条console.log仍然会执行');
```

## GET请求

传入`params`参数会默认按照`GET`处理：

```js
const params = {};
await requestAPI('xxx', { params });
```

## POST请求

传入`data`参数会默认按照`POST`处理：

```js
const data = {};
await requestAPI('xxx', { data });
```

## PostJson请求

传入`json`参数会默认按照`postJson`模式处理：

> 所谓`postJson`模式：`POST` + `Content-Type: 'application/json'`：

```js
const json = {};
await requestAPI('xxx', { json });
```

## 未完待续