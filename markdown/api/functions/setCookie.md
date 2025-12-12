---
toc: content
title: setCookie
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / setCookie

# Function: setCookie()

> **setCookie**(`name`, `value`, `options`): `void`

Defined in: [cookie.ts:34](https://github.com/sxei/youtil/blob/1e50ad47b736bfc1b992a5b1e11e18a70e299e02/src/cookie.ts#L34)

设置cookie，对于中文和特殊字符必须先进行编码

## Parameters

### name

`string`

cookie名称

### value

`string`

cookie值，中文等字符会自动编码

### options

`SetCookieOptions`

## Returns

`void`
