---
nav:
    second: 接口定义
toc: content
title: IRequestOptions
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / IRequestOptions

# Interface: IRequestOptions

Defined in: [request.ts:4](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/request.ts#L4)

requestAPI的第二个参数类型

## Properties

### afterRequest()?

> `optional` **afterRequest**: (`success`, `resp`?) => `void`

Defined in: [request.ts:22](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/request.ts#L22)

请求完成之后触发的钩子，无论成功与否均会触发

#### Parameters

##### success

`boolean`

##### resp?

`any`

#### Returns

`void`

***

### baseUrl?

> `optional` **baseUrl**: `string`

Defined in: [request.ts:14](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/request.ts#L14)

API前缀，不传默认为空

***

### checkSuccess()?

> `optional` **checkSuccess**: (`resp`) => `boolean`

Defined in: [request.ts:24](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/request.ts#L24)

判断接口是否调用成功，默认规则 resp => resp.code == 0 || resp.code == 200

#### Parameters

##### resp

`any`

#### Returns

`boolean`

***

### data?

> `optional` **data**: `Record`\<`string`, `any`\>

Defined in: [request.ts:8](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/request.ts#L8)

POST请求时传递的参数

***

### defaultErrorMessage?

> `optional` **defaultErrorMessage**: `string`

Defined in: [request.ts:30](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/request.ts#L30)

后端未返回 message 时的默认异常文案

***

### errorHandler()?

> `optional` **errorHandler**: (`message`, `resp`, `options`) => `void`

Defined in: [request.ts:32](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/request.ts#L32)

发生异常时的处理方法，一般不太建议重写此方法

#### Parameters

##### message

`string`

##### resp

`any`

##### options

`IRequestOptions`

#### Returns

`void`

***

### ~~errorMessage?~~

> `optional` **errorMessage**: `string`

Defined in: [request.ts:28](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/request.ts#L28)

#### Deprecated

后端未返回 message 时的默认异常文案，由于名称经常引发歧义，估改名为 defaultErrorMessage

***

### fetchOptions?

> `optional` **fetchOptions**: `RequestInit`

Defined in: [request.ts:20](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/request.ts#L20)

其它自定义fetchOptions，优先级高于上面所有参数

***

### formData?

> `optional` **formData**: `Record`\<`string`, `any`\>

Defined in: [request.ts:10](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/request.ts#L10)

采用formData模式请求，可以传入普通的对象，也可以传入标准的formData

***

### headers?

> `optional` **headers**: `Record`\<`string`, `any`\>

Defined in: [request.ts:18](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/request.ts#L18)

headers

***

### json?

> `optional` **json**: `Record`\<`string`, `any`\>

Defined in: [request.ts:12](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/request.ts#L12)

postJson请求时传递的参数

***

### method?

> `optional` **method**: `string`

Defined in: [request.ts:16](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/request.ts#L16)

请求方法，绝大部分情况无需手动指定

***

### onFetchResponse()?

> `optional` **onFetchResponse**: (`response`) => `any`

Defined in: [request.ts:38](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/request.ts#L38)

自定义 fetch.then() ，非常底层的一个方法，非必要请勿使用

#### Parameters

##### response

`Response`

#### Returns

`any`

***

### overrideMessage?

> `optional` **overrideMessage**: `string` \| (`resp`) => `string`

Defined in: [request.ts:42](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/request.ts#L42)

覆盖默认的 resp.message 自定义异常抛出文案，也支持传入方法，注意返回''和undefined效果不同

***

### params?

> `optional` **params**: `Record`\<`string`, `any`\>

Defined in: [request.ts:6](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/request.ts#L6)

GET请求时传递的参数

***

### responseConverter()?

> `optional` **responseConverter**: (`resp`) => `any`

Defined in: [request.ts:26](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/request.ts#L26)

对响应进行自定义格式化处理，包含 checkSuccess 全部能力

#### Parameters

##### resp

`any`

#### Returns

`any`

***

### setLoading()?

> `optional` **setLoading**: (`loading`?) => `void`

Defined in: [request.ts:40](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/request.ts#L40)

切换loading状态的方法，会在开始请求前置为true，结束时置为false。为什么设计这个方法？在非hooks场景下更方便的切换loading状态

#### Parameters

##### loading?

`boolean`

#### Returns

`void`

***

### silent?

> `optional` **silent**: `boolean`

Defined in: [request.ts:36](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/request.ts#L36)

是否关闭默认的异常toast

***

### toastHandler()?

> `optional` **toastHandler**: (`message`) => `void`

Defined in: [request.ts:34](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/request.ts#L34)

自定义toast实现，为了和UI解耦，方法默认不包含UI处理代码

#### Parameters

##### message

`string`

#### Returns

`void`
