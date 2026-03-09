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
