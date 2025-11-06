import { calc, toFixed } from './number';

/**
 * 格式化一段JSON字符串，支持解析非标准JSON
 * 不同于绝大多数格式化工具，本方法支持设置缩进方式以及左大括号是否换行
 * @start 2016-08-24
 * @param {Object} json 要格式化的json串
 * @param {Object} indent 缩进方式，可以是若干个空格和tab，默认tab缩进，如 2个空格："  "、4个空格："	"、tab："	"
 * @param {Object} leftBracesInSameLine 左大括号是否保持在同一行，默认 false
 */
export const formatJson = (json: string, indent?: string, leftBracesInSameLine?: boolean) => {
	function getIndentStr(level: number) {
		let str = '';
		for (let i = 0; i < level; i++) str += (indent || '	');
		return str;
	}
	function format(obj: any, level?: number) {
		level = level === undefined ? 0 : level;
		let result = '';
		// 如果是object或者array
		if (typeof obj === 'object' && obj != null) {
			const isArray = obj instanceof Array;
			let idx = 0;
			result += `${isArray ? '[' : '{'}\n`;
			for (const i in obj) {
				result += (idx++ > 0 ? ',\n' : ''); // 如果不是数组或对象的第一个内容，追加逗号
				const nextIsObj = (typeof obj[i] === 'object' && obj[i] != null);
				const indentStr = getIndentStr(level + 1);
				result += (isArray && nextIsObj) ? '' : indentStr; // 如果当前是数组并且子项是对象，无需缩进
				result += isArray ? '' : (`"${i}": ${nextIsObj && !leftBracesInSameLine ? '\n' : ''}`);
				result += (!nextIsObj || (nextIsObj && leftBracesInSameLine && !isArray)) ? '' : indentStr;
				result += format(obj[i], level + 1); // 递归调用
			}
			result += `\n${getIndentStr(level)}${isArray ? ']' : '}'}`;
		} else {
			// 如果是 null、number、boolean、string
			const quot = typeof obj === 'string' ? '"' : ''; // 是否是字符串
			result += `${quot}${obj}${quot}`;
		}
		return result;
	}
	// eslint-disable-next-line no-eval
	return format(eval(`(${json})`)); // 使用eval的好处是可以解析非标准JSON
};


/**
 * 将数字格式化成更易读取的格式，例如 189、3.8万、427万、29亿
 * @param number 要格式化的数字
 * @param options 其它配置项
 * @returns {string} 返回格式化后的数字
 */
export const formatNumber = (number?: number | string, options: string | {
	/** 格式化风格，short 类似48万 这种，fin 类似 3,4531 ，en-fin 类似 34,531 */
	style?: 'short' | 'fin' | 'en-fin';
	/** 要保留的小数点，不传不做任何处理 */
	toFixed?: number;
} = 'short') => {
	if (!number && number !== 0) {
		return '';
	}
	if (isNaN(number as number)) {
		console.error(`${number} is not a number.`);
		return number;
	}
	const { style, toFixed: toFixedValue } = typeof options === 'string' ? { style: options } : options;
	if (style !== 'short') {
		return toFixed(number, toFixedValue).replace(style === 'fin' ? /\B(?=(\d{4})+(?!\d))/g : /\B(?=(\d{3})+(?!\d))/g, ',');
	}
	number = parseFloat(number as string);
	// 小于1万，原样返回
	if (number < 10000) {
		return toFixed(number, toFixedValue);
	}
	// 十万内保留1位小数，注意这里 toFixed 可能有精度问题，待解决
	// 十万以上、1亿以内，用万做单位，不保留小数
	if (number < 10000 * 10000) {
		return `${calc(`${number}/10000`, number < 100000 ? 1 : 0)}万`;
	}
	// 10亿以内保留1位小数，超过1亿，用亿做单位
	return `${calc(`${number}/100000000`, number < 1000000000 ? 1 : 0)}亿`;
};

/**
 * 将小数格式化成百分比
 * @param num 小数
 * @param toFixedValue 精确到小数点数量
 */
export const formatPercent = (num: number | string, toFixedValue = 2) => {
	if (!num) {
		return '';
	}
	if (isNaN(num as number)) {
		console.error(`${num} is not a number.`);
		return num;
	}
	return `${calc(`${num}*100`, toFixedValue)}%`;
};

