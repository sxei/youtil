---
toc: content
title: initWindowMessage
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / initWindowMessage

# Function: initWindowMessage()

> **initWindowMessage**(`scene`, `targetWindow`?): `object`

Defined in: [message.ts:9](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/message.ts#L9)

初始化窗口通信

## Parameters

### scene

`string`

场景，必传，互相通信的2个窗口必须保证 scene 相同

### targetWindow?

`Window`

目标窗口对象(父窗口或子窗口)，互相通信时允许有一方不传，自动从 event.source 获取

## Returns

`object`

返回postMessage和onMessage方法

### onMessage()

> **onMessage**: (`eventName`, `listener`) => `void`

监听消息

#### Parameters

##### eventName

`string`

事件名称

##### listener

`onMessageListener`

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
