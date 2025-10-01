---
toc: content
title: formatJson
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / formatJson

# Function: formatJson()

> **formatJson**(`json`, `indent`?, `leftBracesInSameLine`?): `string`

Defined in: format.ts:11

格式化一段JSON字符串，支持解析非标准JSON
不同于绝大多数格式化工具，本方法支持设置缩进方式以及左大括号是否换行

## Parameters

### json

`string`

要格式化的json串

### indent?

`string`

缩进方式，可以是若干个空格和tab，默认tab缩进，如 2个空格："  "、4个空格："	"、tab："	"

### leftBracesInSameLine?

`boolean`

左大括号是否保持在同一行，默认 false

## Returns

`string`

## Start

2016-08-24
