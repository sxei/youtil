[**youtil**](../README.md)

***

[youtil](../globals.md) / copyToClipboard

# Function: copyToClipboard()

> **copyToClipboard**(`text`, `onFailure`, `supportSilent`): `Promise`\<`void`\>

Defined in: [index.ts:63](https://github.com/sxei/youtil/blob/e7c4fd83b462ab99891fc0ce3eae8b65b3d2c8a4/src/index.ts#L63)

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
