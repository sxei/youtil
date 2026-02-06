---
toc: content
title: loadScript
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / loadScript

# Function: loadScript()

> **loadScript**(`scriptUrl`, `options`): `Promise`\<`unknown`\>

Defined in: [web.ts:48](https://github.com/sxei/youtil/blob/61594afa3671728b8ff4a347dd6d485914ed84a4/src/web.ts#L48)

异步加载某个脚本，如果失败会抛出异常

## Parameters

### scriptUrl

`string`

脚本地址

### options

[`ILoadScriptOption`](../interfaces/ILoadScriptOption.md) = `{}`

可选配置

## Returns

`Promise`\<`unknown`\>

成功不会返回任何内容
