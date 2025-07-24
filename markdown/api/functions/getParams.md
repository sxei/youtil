---
toc: content
title: getParams
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / getParams

# Function: getParams()

> **getParams**(`url`): `any`

Defined in: [param.ts:29](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/param.ts#L29)

获取某个URL的全部参数
getParams('?a=1&b=2#cc') // {a: '1', b: '2'}

## Parameters

### url

`string` = `location.search`

## Returns

`any`

参数对象
