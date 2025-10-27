---
toc: content
title: EnumType
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / EnumType

# Type Alias: EnumType\<T\>

> **EnumType**\<`T`\> = `T` & `{ [K in T[number]["key"]]: Extract<T[number], { key: K }>["value"] }` & `object`

Defined in: [enum.ts:11](https://github.com/sxei/youtil/blob/694ab8493a838606110abf86b5e5d35bb7326cbe/src/enum.ts#L11)

## Type declaration

### pick()

> **pick**: (`keyOrValue`) => `T`\[`number`\] \| `undefined`

根据 key 或者 value 查找整个对象

#### Parameters

##### keyOrValue

`string` | `number`

#### Returns

`T`\[`number`\] \| `undefined`

### pickByLabel()

> **pickByLabel**: (`label`) => `T`\[`number`\] \| `undefined`

根据 label 查找整个对象

#### Parameters

##### label

`string`

#### Returns

`T`\[`number`\] \| `undefined`

### pickKey()

> **pickKey**: (`keyOrValue`) => `T`\[`number`\]\[`"key"`\] \| `undefined`

根据 value 查找 key

#### Parameters

##### keyOrValue

`string` | `number`

#### Returns

`T`\[`number`\]\[`"key"`\] \| `undefined`

### pickLabel()

> **pickLabel**: (`keyOrValue`) => `T`\[`number`\]\[`"label"`\] \| `undefined`

根据 key 或者 value 查找 label

#### Parameters

##### keyOrValue

`string` | `number`

#### Returns

`T`\[`number`\]\[`"label"`\] \| `undefined`

### pickValue()

> **pickValue**: (`keyOrValue`) => `T`\[`number`\]\[`"value"`\] \| `undefined`

根据 key 查找 value

#### Parameters

##### keyOrValue

`string` | `number`

#### Returns

`T`\[`number`\]\[`"value"`\] \| `undefined`

## Type Parameters

### T

`T` *extends* `EnumItem`\<`string`, `string` \| `number`\>[]
