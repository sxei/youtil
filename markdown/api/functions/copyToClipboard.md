---
toc: content
title: copyToClipboard
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / copyToClipboard

# Function: copyToClipboard()

> **copyToClipboard**(`text`, `onFailure`, `supportSilent`): `Promise`\<`void`\>

Defined in: [other.ts:58](https://github.com/sxei/youtil/blob/ac54be507b7365b6960657f0d7da10429b64d770/src/other.ts#L58)

复制一段文本到剪贴板，如果失败会抛出异常，推荐使用姿势：
await copyTextToClipboard('要复制的文本', message => alert(`复制到剪贴板失败：${message}`));
alert('复制到剪贴板成功！');

## Parameters

### text

`string`

要复制的文本

### onFailure

(`message`) => `void`

失败回调，接受一个 message 参数

### supportSilent

`boolean`

是否支持后台静默复制，如果是则优先采用 execCommand

## Returns

`Promise`\<`void`\>
