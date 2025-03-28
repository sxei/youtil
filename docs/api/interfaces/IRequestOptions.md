[**youtil**](../README.md)

***

[youtil](../globals.md) / IRequestOptions

# Interface: IRequestOptions

Defined in: request.ts:4

requestAPI的第二个参数类型

## Properties

### afterRequest()?

> `optional` **afterRequest**: (`success`, `resp`?) => `void`

Defined in: request.ts:20

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

Defined in: request.ts:12

API前缀，不传默认为空

***

### checkSuccess()?

> `optional` **checkSuccess**: (`resp`) => `boolean`

Defined in: request.ts:30

判断接口是否调用成功，默认规则 resp => resp.code == 0 || resp.code == 200

#### Parameters

##### resp

`any`

#### Returns

`boolean`

***

### data?

> `optional` **data**: `Record`\<`string`, `any`\>

Defined in: request.ts:8

POST请求时传递的参数

***

### errorHandler()?

> `optional` **errorHandler**: (`message`, `resp`?) => `void`

Defined in: request.ts:26

发生异常时的处理方法，一般不太建议重写此方法

#### Parameters

##### message

`string`

##### resp?

`any`

#### Returns

`void`

***

### errorMessage?

> `optional` **errorMessage**: `string`

Defined in: request.ts:24

后端未返回 message 时的默认异常文案

***

### fetchOptions?

> `optional` **fetchOptions**: `RequestInit`

Defined in: request.ts:18

其它自定义fetchOptions

***

### headers?

> `optional` **headers**: `Record`\<`string`, `any`\>

Defined in: request.ts:16

headers

***

### json?

> `optional` **json**: `Record`\<`string`, `any`\>

Defined in: request.ts:10

postJson请求时传递的参数

***

### method?

> `optional` **method**: `string`

Defined in: request.ts:14

请求方法，一般情况下会自动处理无需手动传

***

### params?

> `optional` **params**: `Record`\<`string`, `any`\>

Defined in: request.ts:6

GET请求时传递的参数

***

### responseConverter()?

> `optional` **responseConverter**: (`resp`) => `any`

Defined in: request.ts:22

对响应进行自定义格式化处理

#### Parameters

##### resp

`any`

#### Returns

`any`

***

### silent?

> `optional` **silent**: `boolean`

Defined in: request.ts:32

是否关闭默认的异常toast

***

### toastHandler()?

> `optional` **toastHandler**: (`message`) => `void`

Defined in: request.ts:28

自定义toast实现，为了和UI解耦，方法默认不包含UI处理代码

#### Parameters

##### message

`string`

#### Returns

`void`
