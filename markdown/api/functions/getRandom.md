---
toc: content
title: getRandom
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / getRandom

# Function: getRandom()

> **getRandom**(`start`?, `end`?): `any`

Defined in: [string.ts:12](https://github.com/sxei/youtil/blob/61594afa3671728b8ff4a347dd6d485914ed84a4/src/string.ts#L12)

获取各种随机数，支持如下几种调用方式：
getRandom() 返回0-1的随机小数，等同于Math.random()，0 <= result < 1
getRandom(start, end) 返回start-end的随机整数，start <= result < end
getRandom(end) 返回0-end的随机整数，0 <= result < end
getRandom(array) 随机返回数组中的某一个内容
getRandom(array, count) 随机从数组中返回长度为count的不重复内容组成的新数组，如果不足count个，返回全部 并乱序

## Parameters

### start?

`any`

### end?

`any`

## Returns

`any`
