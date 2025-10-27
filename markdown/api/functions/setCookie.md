---
toc: content
title: setCookie
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / setCookie

# Function: setCookie()

> **setCookie**(`name`, `value`, `options`): `void`

Defined in: [cookie.ts:34](https://github.com/sxei/youtil/blob/694ab8493a838606110abf86b5e5d35bb7326cbe/src/cookie.ts#L34)

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
