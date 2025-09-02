---
toc: content
title: getParams
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / getParams

# Function: getParams()

> **getParams**(`url`): `any`

Defined in: [param.ts:29](https://github.com/sxei/youtil/blob/7f7adc3aa8118da3d99649c0a35e2677f23d7bc0/src/param.ts#L29)

获取某个URL的全部参数
getParams('?a=1&b=2#cc') // {a: '1', b: '2'}

## Parameters

### url

`string` = `location.search`

## Returns

`any`

参数对象
