---
toc: content
title: getParams
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / getParams

# Function: getParams()

> **getParams**(`url`): `any`

Defined in: [param.ts:29](https://github.com/sxei/youtil/blob/504e940dd531066db1982fbf39deebbbf978dd5a/src/param.ts#L29)

获取某个URL的全部参数
getParams('?a=1&b=2#cc') // {a: '1', b: '2'}

## Parameters

### url

`string` = `location.search`

## Returns

`any`

参数对象
