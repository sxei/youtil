---
toc: content
title: formatDuration
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / formatDuration

# Function: formatDuration()

> **formatDuration**(`duration`, `fmt`): `string`

Defined in: [time.ts:104](https://github.com/sxei/youtil/blob/e9b34c64623618e698ab667bad1efa38ce987ab1/src/time.ts#L104)

将一段单位为秒的时长格式化成时间格式，例如：
formatDuration(100) // 01:40
formatDuration(10000) // 02:46:40
注意，如果天或者小时为0会过滤不展示

## Parameters

### duration

`number`

要格式化的时长，单位秒

### fmt

`string` = `'d:hh:mm:ss'`

目标格式，默认 d:hh:mm:ss 可以完全自定义，例如 d天hh小时mm分钟ss秒

## Returns

`string`

返回类似 01:40 的字符串
