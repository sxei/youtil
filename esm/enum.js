import _to_consumable_array from "@swc/helpers/src/_to_consumable_array.mjs";
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
 */ export function createEnum(items) {
    var enumArray = _to_consumable_array(items);
    // 添加枚举键值对
    items.forEach(function(item) {
        enumArray[item.key] = item.value;
    });
    // 实现pick方法
    enumArray.pick = function(keyOrValue) {
        return items.find(function(item) {
            return item.key === keyOrValue || item.value === keyOrValue;
        });
    };
    enumArray.pickLabel = function(keyOrValue) {
        var _enumArray_pick;
        return (_enumArray_pick = enumArray.pick(keyOrValue)) === null || _enumArray_pick === void 0 ? void 0 : _enumArray_pick.label;
    };
    enumArray.pickValue = function(keyOrValue) {
        var _enumArray_pick;
        return (_enumArray_pick = enumArray.pick(keyOrValue)) === null || _enumArray_pick === void 0 ? void 0 : _enumArray_pick.value;
    };
    enumArray.pickKey = function(keyOrValue) {
        var _enumArray_pick;
        return (_enumArray_pick = enumArray.pick(keyOrValue)) === null || _enumArray_pick === void 0 ? void 0 : _enumArray_pick.key;
    };
    return enumArray;
} // 使用示例
 // const genders = createEnum([
 //	 { label: '男', value: 1, key: 'MAN', a: 1 },
 //	 { label: '女', value: '2', key: 'WOMAN' },
 // ] as const);
 // console.log(genders.MAN); // 鼠标悬停显示类型为 1
 // console.log(genders.pick('MAN')); // 返回MAN的完整对象
 // console.log(genders.pick(1)); // 返回MAN的完整对象
 // console.log(genders.pickLabel(1)); // 返回 男
 // console.log(genders.pickValue('MAN')); // 1
 // console.log(genders.pickKey(1)); // MAN
 // console.log(genders); // 输出完整数组
 // console.log(genders.length); // 输出2
