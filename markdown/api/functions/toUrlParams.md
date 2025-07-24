---
toc: content
title: toUrlParams
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / toUrlParams

# Function: toUrlParams()

> **toUrlParams**(`data`): `string`

Defined in: [param.ts:75](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/param.ts#L75)

将一个普通对象转为 a=1&b=2 的URL格式，会自动过滤undefined的值

## Parameters

### data

`any`

一个普通对象，如果对象嵌对象则会被自动转为JSON

## Returns

`string`

返回类似 a=1&b=2 的字符串
