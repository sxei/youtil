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
export const getRandom = (start?: any, end?: any) => {
	if (typeof start === 'number') {
		if (typeof end === 'undefined') {
			end = start;
			start = 0;
		}
		return start + Math.floor(Math.random() * (end - start));
	} else if (start instanceof Array) {
		if (typeof end === 'undefined') {
			if (start.length === 0) return null;
			if (start.length === 1) return start[0];
			return start[Math.floor(Math.random() * start.length)];
		} else {
			start.sort(() => (Math.random() > 0.5 ? 1 : -1));
			return start.slice(0, end);
		}
	}
	return Math.random();
};

/**
 * 获取随机字符串
 * @param length 字符串长度
 * @param type all 表示所有，number表示仅数字，默认所有
 * @return string
 */
export const getRandomStr = (length: number, type?: 'number' | 'all') => {
	length = length || 18;
	let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz0123456789'.split('');
	if (type === 'number') chars = '0123456789'.split('');
	let result = '';
	for (let i = 0; i < length; i++) result += getRandom(chars);
	return result;
};

/**
 * 字符串转下划线形式，示例：getParam 转 get_param
 * @param str 要转换的字符串
 * @param flag 默认下划线-，也可以传其它字符
 */
export const toUnderline = (str: string, flag?: string) => {
	return str.replace(/([A-Z])/g, (m, $1) => `${flag || '_'}${$1.toLowerCase()}`);
};

/**
 * 字符串转驼峰形式
 * 示例一： toHump('get_param')，返回getParam
 * 示例二： toHump('font-size','-')，返回fontSize
 * @param str
 * @param 分割的标志，默认为“_”
 */
export const toHump = (str: string, flag?: string) => {
	return str.replace(new RegExp(`${flag || '_'}(\\w)`, 'g'), (_m, $1) => $1.toUpperCase());
};
