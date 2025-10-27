---
toc: content
title: toUrlParams
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / toUrlParams

# Function: toUrlParams()

> **toUrlParams**(`data`): `string`

Defined in: [param.ts:75](https://github.com/sxei/youtil/blob/694ab8493a838606110abf86b5e5d35bb7326cbe/src/param.ts#L75)

将一个普通对象转为 a=1&b=2 的URL格式，会自动过滤undefined的值

## Parameters

### data

`any`

一个普通对象，如果对象嵌对象则会被自动转为JSON

## Returns

`string`

返回类似 a=1&b=2 的字符串
