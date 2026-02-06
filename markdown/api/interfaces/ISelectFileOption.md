---
toc: content
title: ISelectFileOption
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / ISelectFileOption

# Interface: ISelectFileOption

Defined in: [web.ts:72](https://github.com/sxei/youtil/blob/61594afa3671728b8ff4a347dd6d485914ed84a4/src/web.ts#L72)

## Properties

### accept?

> `optional` **accept**: `string`

Defined in: [web.ts:76](https://github.com/sxei/youtil/blob/61594afa3671728b8ff4a347dd6d485914ed84a4/src/web.ts#L76)

支持的文件格式，默认全部，格式类似 'image/*,video/mp4' 这种

***

### acceptDescription?

> `optional` **acceptDescription**: `string`

Defined in: [web.ts:78](https://github.com/sxei/youtil/blob/61594afa3671728b8ff4a347dd6d485914ed84a4/src/web.ts#L78)

picker模式时自定义文件格式中文描述，默认“自定义文件”

***

### forceInputMode?

> `optional` **forceInputMode**: `boolean`

Defined in: [web.ts:80](https://github.com/sxei/youtil/blob/61594afa3671728b8ff4a347dd6d485914ed84a4/src/web.ts#L80)

是否强制 input[file] 模式，默认为自动

***

### multiple?

> `optional` **multiple**: `boolean`

Defined in: [web.ts:74](https://github.com/sxei/youtil/blob/61594afa3671728b8ff4a347dd6d485914ed84a4/src/web.ts#L74)

是否允许多选，默认否，注意无论是否多选，返回结果都是数组
