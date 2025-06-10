[**youtil**](../README.md)

***

[youtil](../globals.md) / IRequestOptions

# Interface: IRequestOptions

Defined in: [request.ts:3](https://github.com/sxei/youtil/blob/f5dc221b993abf7457adce16980faa2f15738fd6/src/request.ts#L3)

requestAPI的第二个参数类型

## Properties

### afterRequest()?

> `optional` **afterRequest**: (`success`, `resp`?) => `void`

Defined in: [request.ts:21](https://github.com/sxei/youtil/blob/f5dc221b993abf7457adce16980faa2f15738fd6/src/request.ts#L21)

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

Defined in: [request.ts:13](https://github.com/sxei/youtil/blob/f5dc221b993abf7457adce16980faa2f15738fd6/src/request.ts#L13)

API前缀，不传默认为空

***

### checkSuccess()?

> `optional` **checkSuccess**: (`resp`) => `boolean`

Defined in: [request.ts:23](https://github.com/sxei/youtil/blob/f5dc221b993abf7457adce16980faa2f15738fd6/src/request.ts#L23)

判断接口是否调用成功，默认规则 resp => resp.code == 0 || resp.code == 200

#### Parameters

##### resp

`any`

#### Returns

`boolean`

***

### data?

> `optional` **data**: `Record`\<`string`, `any`\>

Defined in: [request.ts:7](https://github.com/sxei/youtil/blob/f5dc221b993abf7457adce16980faa2f15738fd6/src/request.ts#L7)

POST请求时传递的参数

***

### errorHandler()?

> `optional` **errorHandler**: (`message`, `resp`?) => `void`

Defined in: [request.ts:29](https://github.com/sxei/youtil/blob/f5dc221b993abf7457adce16980faa2f15738fd6/src/request.ts#L29)

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

Defined in: [request.ts:27](https://github.com/sxei/youtil/blob/f5dc221b993abf7457adce16980faa2f15738fd6/src/request.ts#L27)

后端未返回 message 时的兜底异常文案

***

### fetchOptions?

> `optional` **fetchOptions**: `RequestInit`

Defined in: [request.ts:19](https://github.com/sxei/youtil/blob/f5dc221b993abf7457adce16980faa2f15738fd6/src/request.ts#L19)

其它自定义fetchOptions，优先级高于上面所有参数

***

### formData?

> `optional` **formData**: `Record`\<`string`, `any`\>

Defined in: [request.ts:9](https://github.com/sxei/youtil/blob/f5dc221b993abf7457adce16980faa2f15738fd6/src/request.ts#L9)

采用formData模式请求，可以传入普通的对象，也可以传入标准的formData

***

### headers?

> `optional` **headers**: `Record`\<`string`, `any`\>

Defined in: [request.ts:17](https://github.com/sxei/youtil/blob/f5dc221b993abf7457adce16980faa2f15738fd6/src/request.ts#L17)

headers

***

### json?

> `optional` **json**: `Record`\<`string`, `any`\>

Defined in: [request.ts:11](https://github.com/sxei/youtil/blob/f5dc221b993abf7457adce16980faa2f15738fd6/src/request.ts#L11)

postJson请求时传递的参数

***

### method?

> `optional` **method**: `string`

Defined in: [request.ts:15](https://github.com/sxei/youtil/blob/f5dc221b993abf7457adce16980faa2f15738fd6/src/request.ts#L15)

请求方法，绝大部分情况无需手动指定

***

### onFetchResponse()?

> `optional` **onFetchResponse**: (`response`) => `any`

Defined in: [request.ts:35](https://github.com/sxei/youtil/blob/f5dc221b993abf7457adce16980faa2f15738fd6/src/request.ts#L35)

自定义 fetch.then() ，非常底层的一个方法，非必要请勿使用

#### Parameters

##### response

`Response`

#### Returns

`any`

***

### params?

> `optional` **params**: `Record`\<`string`, `any`\>

Defined in: [request.ts:5](https://github.com/sxei/youtil/blob/f5dc221b993abf7457adce16980faa2f15738fd6/src/request.ts#L5)

GET请求时传递的参数

***

### responseConverter()?

> `optional` **responseConverter**: (`resp`) => `any`

Defined in: [request.ts:25](https://github.com/sxei/youtil/blob/f5dc221b993abf7457adce16980faa2f15738fd6/src/request.ts#L25)

对响应进行自定义格式化处理，包含 checkSuccess 全部能力

#### Parameters

##### resp

`any`

#### Returns

`any`

***

### silent?

> `optional` **silent**: `boolean`

Defined in: [request.ts:33](https://github.com/sxei/youtil/blob/f5dc221b993abf7457adce16980faa2f15738fd6/src/request.ts#L33)

是否关闭默认的异常toast

***

### toastHandler()?

> `optional` **toastHandler**: (`message`) => `void`

Defined in: [request.ts:31](https://github.com/sxei/youtil/blob/f5dc221b993abf7457adce16980faa2f15738fd6/src/request.ts#L31)

自定义toast实现，为了和UI解耦，方法默认不包含UI处理代码

#### Parameters

##### message

`string`

#### Returns

`void`
