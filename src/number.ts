
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

const getBigJs = () => {
	if (bigJs || (window as any).Big) {
		return bigJs || (window as any).Big;
	}
	throw new Error(`big.js未初始化，您可以在调用本方法前：
		1. 通过npm初始化：import Big from 'big.js'; initBigJs(Big);
		1. 通过CDN初始化：https://unpkg.shop.jd.com/big.js@7.0.1/big.js`);
};

/**
 * 不会丢失精度的计算数学表达式
 * 注意，由于 youtil 承诺不会在代码中依赖任何第三方模块，调用前需要确保 window.Big 存在
 * @param exp 计算表达式，例如 '3.14+8.99'，注意仅支持单次运算
 * @param toFixedDigits 对结果进行四舍五入需要保留的小数点，不传忽略四舍五入
 * @returns 默认情况返回 number ，设置了 toFixed 后返回字符串
 */
export const calc = (exp: string, toFixedDigits?: number) => {
	const Big = getBigJs();
	const [n1, op, n2] = exp.split(/(\+|-|\*|\/|%)/g).map(item => item.trim());
	if (!op || !n2) {
		throw new Error('输入字符串不合法！');
	}
	const method = ({
		'+': 'plus',
		'-': 'minus',
		'*': 'times',
		'/': 'div',
		'%': 'mod',
	})[op];
	if (!method) {
		throw new Error('op不合法！');
	}
	const val = new Big(n1)[method](n2);
	if (toFixedDigits === undefined) return val.toNumber();
	return val.toFixed(toFixedDigits);
};

/**
 * @deprecated 请使用 calc
 */
export const calculate = calc;

/**
 * 替代浏览器自带toFixed，会进行正确的四舍五入
 * @param num 要加工的数字
 * @param fractionDigits 保留的小数点位数
 * @returns 返回四舍五入后的字符串
 */
export const toFixed = (num: string | number, fractionDigits?: number) => {
	if (fractionDigits === undefined) {
		return `${num ?? ''}`;
	}
	const Big = getBigJs();
	return new Big(num).toFixed(fractionDigits).toString();
};
