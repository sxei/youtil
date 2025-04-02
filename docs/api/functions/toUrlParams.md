[**youtil**](../README.md)

***

[youtil](../globals.md) / toUrlParams

# Function: toUrlParams()

> **toUrlParams**(`data`): `string`

Defined in: [param.ts:75](https://github.com/sxei/youtil/blob/d9060d657627a7649d5f5235a6f4783a1d5487be/src/param.ts#L75)

将一个普通对象转为 a=1&b=2 的URL格式，会自动过滤undefined的值

## Parameters

### data

`any`

一个普通对象，如果对象嵌对象则会被自动转为JSON

## Returns

`string`

返回类似 a=1&b=2 的字符串
