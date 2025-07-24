/**
 * 格式化一段JSON字符串，支持解析非标准JSON
 * 不同于绝大多数格式化工具，本方法支持设置缩进方式以及左大括号是否换行
 * @start 2016-08-24
 * @param {Object} json 要格式化的json串
 * @param {Object} indent 缩进方式，可以是若干个空格和tab，默认tab缩进，如 2个空格："  "、4个空格："	"、tab："	"
 * @param {Object} leftBracesInSameLine 左大括号是否保持在同一行，默认 false
 */
export declare const formatJson: (json: string, indent?: string, leftBracesInSameLine?: boolean) => string;
/**
 * 获取各种随机数，支持如下几种调用方式：
 * getRandom() 返回0-1的随机小数，等同于Math.random()，0 <= result < 1
 * getRandom(start, end) 返回start-end的随机整数，start <= result < end
 * getRandom(end) 返回0-end的随机整数，0 <= result < end
 * getRandom(array) 随机返回数组中的某一个内容
 * getRandom(array, count) 随机从数组中返回长度为count的不重复内容组成的新数组，如果不足count个，返回全部 并乱序
 * @param {Object} start
 * @param {Object} end
 * @return {Object}
 */
export declare const getRandom: (start?: any, end?: any) => any;
/**
 * 获取随机字符串
 * @param length 字符串长度
 * @param type all 表示所有，number表示仅数字，默认所有
 * @return string
 */
export declare const getRandomStr: (length: number, type?: "number" | "all") => string;
/**
 * 字符串转下划线形式，示例：getParam 转 get_param
 * @param str 要转换的字符串
 * @param flag 默认下划线-，也可以传其它字符
 */
export declare const toUnderline: (str: string, flag?: string) => string;
/**
 * 字符串转驼峰形式
 * 示例一： toHump('get_param')，返回getParam
 * 示例二： toHump('font-size','-')，返回fontSize
 * @param str
 * @param 分割的标志，默认为“_”
 */
export declare const toHump: (str: string, flag?: string) => string;
