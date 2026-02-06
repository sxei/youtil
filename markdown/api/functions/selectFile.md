---
toc: content
title: selectFile
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / selectFile

# Function: selectFile()

> **selectFile**(`options`?): `Promise`\<`File`[]\>

Defined in: [web.ts:88](https://github.com/sxei/youtil/blob/61594afa3671728b8ff4a347dd6d485914ed84a4/src/web.ts#L88)

通用文件选择方法（优先现代API，不支持再降级为传统input模式）

## Parameters

### options?

[`ISelectFileOption`](../interfaces/ISelectFileOption.md) = `{}`

配置参数

## Returns

`Promise`\<`File`[]\>

- 返回选择的 File 对象数组，取消选择返回空数组
