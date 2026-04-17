---
toc: content
title: getImageSize
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / getImageSize

# Function: getImageSize()

> **getImageSize**(`srcOrFile`): `Promise`\<\{ `height`: `number`; `width`: `number`; \}\>

Defined in: [web.ts:136](https://github.com/sxei/youtil/blob/cdf086a3320f6f7142b4bcac73a2aebe78c926d2/src/web.ts#L136)

获取图片的宽度和高度信息

## Parameters

### srcOrFile

`string` \| `Blob`

图片URL地址或Blob对象

## Returns

`Promise`\<\{ `height`: `number`; `width`: `number`; \}\>

Promise<{width: number, height: number}> 返回图片的宽度和高度

## Description

支持通过图片URL或Blob对象获取图片尺寸，自动处理跨域问题
