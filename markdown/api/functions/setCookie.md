---
toc: content
title: setCookie
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / setCookie

# Function: setCookie()

> **setCookie**(`name`, `value`, `options`): `void`

Defined in: [cookie.ts:34](https://github.com/sxei/youtil/blob/7f7adc3aa8118da3d99649c0a35e2677f23d7bc0/src/cookie.ts#L34)

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
