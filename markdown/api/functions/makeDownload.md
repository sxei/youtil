---
toc: content
title: makeDownload
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / makeDownload

# Function: makeDownload()

> **makeDownload**(`url`, `downloadName?`): `void`

Defined in: [web.ts:23](https://github.com/sxei/youtil/blob/cdf086a3320f6f7142b4bcac73a2aebe78c926d2/src/web.ts#L23)

触发文件下载

## Parameters

### url

`string`

下载链接

### downloadName?

`string`

下载文件名（可选）
【重要说明】关于 downloadName 参数的生效条件：
 - 同源：download 属性 > Content-Disposition 头 > URL 中的文件名
 - 跨域：Content-Disposition 头 > URL 中的文件名（download 属性被忽略）
 Content-Disposition示例：
 Content-Disposition: attachment; filename="example.pdf"

## Returns

`void`
