---
toc: content
title: delParam
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / delParam

# Function: delParam()

> **delParam**(`name`, `url`): `string`

Defined in: [param.ts:65](https://github.com/sxei/youtil/blob/3b581c08fcff87306a01ca309f1a64565d5e1e6a/src/param.ts#L65)

删除URL中某个参数
delParam('a', '?a=1&b=2&a=3#d') // '?b=2#d'
delParam('b', '?a=1&b=2&a=3#d') // '?a=1&a=3#d'
delParam('a', '?a=1#d') // '#d'

## Parameters

### name

`string`

参数名

### url

`string`

要删除的URL，默认当前页面URL

## Returns

`string`

处理完后的URL
