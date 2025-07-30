export type EnumItem<K extends string, V extends string | number> = {
	/** 显示出来的名称 */
	label: string;
	/** 实际传递的值 */
	value: V;
	/** 方便记忆的英文别名，可选 */
	key?: K;
	[key: string]: any;
};

export type EnumType<T extends ReadonlyArray<EnumItem<string, string | number>>> = T & {
	[K in T[number]['key']]: Extract<T[number], { key: K }>['value'];
} & {
	/** 根据 key 或者 value 查找整个对象 */
	pick: (keyOrValue: string | number) => T[number] | undefined;
	/** 根据 key 或者 value 查找 label */
	pickLabel: (keyOrValue: string | number) => T[number]['label'] | undefined;
	/** 根据 key 查找 value */
	pickValue: (keyOrValue: string | number) => T[number]['value'] | undefined;
	/** 根据 value 查找 key */
	pickKey: (keyOrValue: string | number) => T[number]['key'] | undefined;
	/** 根据 label 查找整个对象 */
	pickByLabel: (label: string) => T[number] | undefined;
};

/**
 * 创建一个枚举，支持多种高级用法：<br>
 * const enums = createEnum([{ key: 'MAN', label: '男', value: 1 }])<br>
 * console.log(enums.MAN) // 1<br>
 * console.log(enums.pick('MAN')) // 对象<br>
 * console.log(enums.pick(1)) // 对象<br>
 * console.log(enums.pickLabel('MAN')) // 男<br>
 * console.log(enums.pickValue('MAN')) // 1<br>
 * console.log(enums) // 数组对象
 * @param items
 * @returns
 */
export function createEnum<T extends ReadonlyArray<EnumItem<string, string | number>>>(items: T): EnumType<T> {
	const enums = [...items] as unknown as EnumType<T>;
	const map: Record<string, EnumItem<string, string | number>> = {};
	const labelMap: Record<string, EnumItem<string, string | number>> = {};
	items.forEach((item) => {
		map[item.value] = item;
		labelMap[item.label] = item;
		if (item.key) {
			// 理论上 key 和 value 不允许重复
			map[item.key] = item;
			if (typeof item.key === 'number') {
				console.error('createEnum中的key不能为纯数字');
			} else {
				// 支持类似 genders.MAN 的用法
				(enums as any)[item.key] = item.value;
			}
		}
	});

	// 实现pick方法
	enums.pick = (keyOrValue: string | number) => map[keyOrValue];
	enums.pickLabel = (keyOrValue: string | number) => enums.pick(keyOrValue)?.label;
	enums.pickValue = (keyOrValue: string | number) => enums.pick(keyOrValue)?.value;
	enums.pickKey = (keyOrValue: string | number) => enums.pick(keyOrValue)?.key;
	enums.pickByLabel = (label: string) => labelMap[label];
	return enums as EnumType<T>;
}

// 使用示例
/* const genders = createEnum([
	{ label: '男', value: 1, key: 'MAN', a: 1 },
	{ label: '女', value: '2', key2: 'WOMAN' },
] as const);

console.log(genders.MAN); // 鼠标悬停显示类型为 1
console.log(genders.pick('MAN')); // 返回MAN的完整对象
console.log(genders.pick(1)); // 返回MAN的完整对象
console.log(genders.pickLabel(1)); // 返回 男
console.log(genders.pickValue('MAN')); // 1
console.log(genders.pickKey(1)); // MAN
console.log(genders); // 输出完整数组
console.log(genders.length); // 输出2 */
