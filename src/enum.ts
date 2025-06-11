type EnumItem<K extends string, V extends string | number> = {
    label: string;
    value: V;
    key: K;
    [key: string]: any;
};

type EnumType<T extends ReadonlyArray<EnumItem<string, string | number>>> = T & {
    [K in T[number]['key']]: Extract<T[number], { key: K }>['value'];
} & {
    pick: (keyOrValue: string | number) => T[number] | undefined;
    pickLabel: (keyOrValue: string | number) => T[number]['label'] | undefined;
    pickValue: (keyOrValue: string | number) => T[number]['value'] | undefined;
    pickKey: (keyOrValue: string | number) => T[number]['key'] | undefined;
};

/**
 * 创建一个枚举，支持多种高级用法：
 * const enums = createEnum([{ key: 'MAN', label: '男', value: 1 }])
 * console.log(enums.MAN) // 1
 * console.log(enums.pick('MAN')) // 对象
 * console.log(enums.pick(1)) // 对象
 * console.log(enums.pickLabel('MAN')) // 男
 * console.log(enums.pickValue('MAN')) // 1
 * console.log(enums) // 数组对象
 * @param items
 * @returns
 */
export function createEnum<T extends ReadonlyArray<EnumItem<string, string | number>>>(items: T): EnumType<T> {
    const enumArray = [...items] as unknown as EnumType<T>;

    // 添加枚举键值对
    items.forEach((item) => {
        (enumArray as any)[item.key] = item.value;
    });

    // 实现pick方法
    enumArray.pick = (keyOrValue: string | number) => {
        return items.find((item) => item.key === keyOrValue || item.value === keyOrValue);
    };

    enumArray.pickLabel = (keyOrValue: string | number) => {
        return enumArray.pick(keyOrValue)?.label;
    };

    enumArray.pickValue = (keyOrValue: string | number) => {
        return enumArray.pick(keyOrValue)?.value;
    };

    enumArray.pickKey = (keyOrValue: string | number) => {
        return enumArray.pick(keyOrValue)?.key;
    };

    return enumArray as EnumType<T>;
}

// 使用示例
// const genders = createEnum([
//     { label: '男', value: 1, key: 'MAN', a: 1 },
//     { label: '女', value: '2', key: 'WOMAN' },
// ] as const);
// console.log(genders.MAN); // 鼠标悬停显示类型为 1
// console.log(genders.pick('MAN')); // 返回MAN的完整对象
// console.log(genders.pick(1)); // 返回MAN的完整对象
// console.log(genders.pickLabel(1)); // 返回 男
// console.log(genders.pickValue('MAN')); // 1
// console.log(genders.pickKey(1)); // MAN
// console.log(genders); // 输出完整数组
// console.log(genders.length); // 输出2
