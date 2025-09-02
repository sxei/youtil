---
order: 1
toc: content
---

# 接口请求 request

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

```jsx preview
import { request, Request } from 'youtil';
import { useEffect } from 'react';

var request2 = new Request({ errorMessage: '我是222', fetchOptions: {} });
var request3 = new Request({ baseUrl: '/api/' }, request2);
export default () => {
  const test = async () => {
    const a = await request2('test-post', { data: {a: 1}, onFetchResponse: resp => ({ code: 0, data: resp.headers }) });
    console.log(a, Object.fromEntries(a.entries()));
    
  }
  return <div>
    <a href="javascript:;" onClick={test}>点击请求</a>
  </div>;
}
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


## formData模式

传入`formData`参数：

```js
const formData = {
  file: SomeFile,
};
await requestAPI('xxx', { formData });
```

## PostJson请求

传入`json`参数会默认按照`postJson`模式处理：

> 所谓`postJson`模式：`POST` + `Content-Type: 'application/json'`：

```js
const json = {};
await requestAPI('xxx', { json });
```

## 创建新的实例


```jsx preview
import { request, Request } from 'youtil';
import { useEffect } from 'react';

var request2 = request.create({
  baseUrl: 'http://xxx.com',
  errorMessage: '报错啦啦啦',
});
console.log(request2.overrideOptions);

var request3 = request2.create({
  toastHandler: msg => alert(msg),
});
console.log(request3.overrideOptions);

export default () => {
  const test = async () => {
    await request3('/test', { data: {a: 1} });
  }
  return <div>
    <a href="javascript:;" onClick={test}>点击请求</a>
  </div>;
}
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

## 未完待续
