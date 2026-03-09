/* eslint-disable no-redeclare */
import Bigjs from 'big.js';
import type Big from 'big.js';

let bigJs: any = null;

/**
 * 初始化 big.js，在执行数学相关的函数前必须执行一次本方法：
 * import Big from 'big.js';
 * initBigJs(Big);
 * @param Big 从 big.js 导入的对象
 */
export const initBigJs = (Big: any) => {
	bigJs = Big;
};

// 从 3.2.0 开始，Big.js直接内置，无需额外导入
initBigJs(Bigjs);

const getBigJs = () => {
	if (bigJs || (window as any).Big) {
		return bigJs || (window as any).Big;
	}
	throw new Error(`big.js未初始化，您可以在调用本方法前：
		1. 通过npm初始化：import Big from 'big.js'; initBigJs(Big);
		1. 通过CDN初始化：https://unpkg.shop.jd.com/big.js@7.0.1/big.js`);
};

/**
 * 中缀表达式转后缀表达式
 * 示例 infixToPostfix('1+25*3-(4+5)') 输出：["1", "25", "3", "*", "+", "4", "5", "+", "-"]
 * @params {string} exp 允许空格和小数的中缀表达式
 */
const infixToPostfix = (exp: string) => {
	// 去除空格，优化负数，例如 -3+1 -> 0-3+1, 3+(-2+6)-3 -> 3+(0-2+6)-3
	exp = exp.replace(/\s+/g, '').replace(/(^|\()-/g, '$10-'); // 你的优化写法
	const output = []; // 存放结果的数组
	const stack = []; // 存放操作符和括号的临时栈
	// 加减乘除求余的运算优先级
	const weights: Record<string, number> = {
		'+': 1,
		'-': 1,
		'*': 2,
		'/': 2,
		'%': 2,
	};
	for (let i = 0; i < exp.length; i++) {
		const char = exp[i];
		if (/[0-9.]/.test(char)) {
			let num = char;
			// 数组越界无需特殊处理
			while (/[0-9.]/.test(exp[i + 1])) {
				num += exp[++i];
			}
			output.push(num);
		} else if (char === '(') {
			stack.push(char); // 左括号先入栈
		} else if (char === ')') {
			// 遇到右括号，循环出栈到output，直至遇到左括号（左括号自身需要丢弃）
			while (stack.length) {
				const pop = stack.pop();
				if (pop === '(') break;
				output.push(pop);
			}
		} else if (weights[char]) {
			// 如果是操作符，只要栈顶操作符优先级更高就一直出栈到output
			while (weights[stack[stack.length - 1]] >= weights[char]) {
				output.push(stack.pop());
			}
			// 然后继续入栈
			stack.push(char);
		} else {
			throw new SyntaxError(`表达式包含非法字符：${char}`);
		}
	}
	// 循环结束如果栈不为空，全部出栈
	while (stack.length) {
		output.push(stack.pop());
	}
	return output;
};

// export interface ICalc {
// 	(exp: string): number;
// 	(exp: string, toFixedDigits: number): string;
// }

/**
 * 支持【加、减、乘、除、求余、括号】运算、不丢失精度、支持运算优先级的万能通用数学表达式计算函数
 * @param exp 合法的数学计算表达式，支持过滤空格，例如 (-0.2+3/(4-1)*4)%3 输出 0.8
 * @param toFixedDigits 是否需要对结精度进行四舍五入，不传原样返回number，传了返回字符串
 * @returns
 */
export const calc = (exp: string, toFixedDigits?: number) => {
	const Big = getBigJs();
	const postfix = infixToPostfix(exp);
	const output: any[] = [];
	const methods: Record<string, string> = {
		'+': 'plus',
		'-': 'minus',
		'*': 'times',
		'/': 'div',
		'%': 'mod',
	};
	for (const char of postfix) {
		if (methods[char]) {
			const num2 = output.pop();
			const num1 = output.pop();
			const result = num1[methods[char]](num2);
			output.push(result);
		} else {
			output.push(new Big(char));
		}
	}
	const result: Big = output[0];
	if (toFixedDigits === undefined) return result.toNumber();
	return result.toFixed(toFixedDigits);
};

/**
 * @deprecated 请使用 calc
 */
export const calculate = calc;

/**
 * 替代浏览器自带toFixed，会进行正确的四舍五入
 * @param num 要加工的数字
 * @param toFixedDigits 保留的小数点位数
 * @returns 返回四舍五入后的字符串
 */
export const toFixed = (num: string | number, toFixedDigits?: number) => {
	if (toFixedDigits === undefined) {
		return `${num ?? ''}`;
	}
	const Big = getBigJs();
	return new Big(num).toFixed(toFixedDigits).toString();
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