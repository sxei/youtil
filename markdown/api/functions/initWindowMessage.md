---
toc: content
title: initWindowMessage
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / initWindowMessage

# Function: initWindowMessage()

> **initWindowMessage**(`scene`, `targetWindow`?, `options`?): `object`

Defined in: [message.ts:14](https://github.com/sxei/youtil/blob/912f5a94397507d38dcc16fa17ea818b6f46a442/src/message.ts#L14)

初始化窗口通信

## Parameters

### scene

`string`

场景，必传，互相通信的2个窗口必须保证 scene 相同

### targetWindow?

`Window`

目标窗口对象(父窗口或子窗口)，互相通信时允许有一方不传，自动从 event.source 获取

### options?

[`initWindowMessageOptions`](../interfaces/initWindowMessageOptions.md)

## Returns

`object`

返回postMessage和onMessage方法

### offMessage()

> **offMessage**: (`eventName`?, `listener`?) => `void`

取消消息监听事件绑定

#### Parameters

##### eventName?

`string`

要取消的事件名，如果不传，取消所有消息监听

##### listener?

[`onMessageListener`](../type-aliases/onMessageListener.md)

要取消的具体监听方法，如果不传，取消所有名为 eventName 的事件

#### Returns

`void`

### onMessage()

> **onMessage**: (`eventName`, `listener`) => `void`

监听消息

#### Parameters

##### eventName

`string`

事件名称

##### listener

[`onMessageListener`](../type-aliases/onMessageListener.md)

监听函数(支持异步)：(...params) => callbackValue

#### Returns

`void`

### postMessage()

> **postMessage**: \<`T`\>(`eventName`, ...`payload`?) => `void` \| `Promise`\<`T`\>

发送消息并等待响应

#### Type Parameters

##### T

`T`

#### Parameters

##### eventName

`string`

事件名称

##### payload?

...`any`[]

负载数据

#### Returns

`void` \| `Promise`\<`T`\>

返回一个Promise，resolve接收回调数据
