import { calc } from './number';

/**
 * 将字符串或数字解析成日期
 * @param str 输入的日期字符串，如'2014-09-13'，也可以是一个时间戳
 * @param fmt 字符串格式，支持如下：y、M、d、H、m、s、S，不支持w和q，不传时会根据str的格式尽量自动判断
 * @returns 解析后的Date类型日期
 */
export const parseDate = (str: Date | string | number, fmt?: string): Date | null => {
	if (!str) {
		return null;
	}
	// 兼容已经是日期类型，直接返回
	if (str instanceof Date) {
		return str;
	}
	// 如果fmt为空，则根据str的格式尽量自动判断
	if (!fmt) {
		let date: Date = null;
		// 如果是数字格式的时间戳
		if (typeof str === 'number') {
			// 1687682453445
			date = new Date(str);
		} else if (typeof str === 'string') {
			// 如果是字符串格式的时间戳
			if (/^\d{12,13}$/g.test(str)) {
				// '1687682453445'
				date = new Date(parseInt(str, 10));
			} else if (/^.{10}T.{8,12}Z?$/g.test(str)) {
				// '2019-01-01T00:00:00.000Z'
				date = new Date(str);
			} else if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/g.test(str)) {
				// 2025-08-12 12:23:44
				fmt = 'yyyy-MM-dd HH:mm:ss';
			}
		}
		if (!fmt) {
			// 如果日期合法
			if (date instanceof Date && !isNaN(date?.getTime())) {
				return date;
			}
			console.error('Auto parseDate error: invalid date:', str);
			return null;
		}
	}
	// 如果fmt不为空，则严格根据fmt的格式解析
	const obj: any = { y: 0, M: 1, d: 0, H: 0, h: 0, m: 0, s: 0, S: 0 };
	fmt.replace(/([^yMdHmsS]*?)(([yMdHmsS])\3*)([^yMdHmsS]*?)/g, (m, $1, $2, $3, $4) => {
		str = `${str || ''}`.replace(new RegExp(`${$1}(\\d{${$2.length}})${$4}`), (_m, _$1) => {
			obj[$3] = parseInt(_$1, 10);
			return '';
		});
		return '';
	});
	obj.M--; // 月份是从0开始的，所以要减去1
	const date = new Date(obj.y, obj.M, obj.d, obj.H, obj.m, obj.s);
	if (obj.S !== 0) {
		date.setMilliseconds(obj.S); // 如果设置了毫秒
	}
	return date;
};

/**
 * 将日期格式化成指定格式的字符串
 * @param date 要格式化的日期，不传时默认当前时间，也可以是一个时间戳等
 * @param fmt 目标字符串格式，支持的字符有：y,M,d,q,w,H,h,m,S，默认：yyyy-MM-dd HH:mm:ss
 * @returns 返回格式化后的日期字符串
 */
export const formatDate = (date?: Date | number | string, fmt?: string) => {
	date = parseDate(date);
	if (!date) {
		return '';
	}
	fmt = fmt || 'yyyy-MM-dd HH:mm:ss';
	const obj: any = {
		y: date.getFullYear(), // 年份，注意必须用getFullYear
		M: date.getMonth() + 1, // 月份，注意是从0-11
		d: date.getDate(), // 日期
		q: Math.floor((date.getMonth() + 3) / 3), // 季度
		w: date.getDay(), // 星期，注意是0-6
		H: date.getHours(), // 24小时制
		h: date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 12小时制
		m: date.getMinutes(), // 分钟
		s: date.getSeconds(), // 秒
		S: date.getMilliseconds(), // 毫秒
	};
	const week: any = ['天', '一', '二', '三', '四', '五', '六'];
	for (const i in obj) {
		fmt = fmt.replace(new RegExp(`${i}+`, 'g'), (m) => {
			let val = `${obj[i]}`;
			if (i === 'w') {
				return `${m.length > 2 ? '星期' : '周'}${week[val]}`;
			}
			for (let j = 0, len = val.length; j < m.length - len; j++) {
				val = `0${val}`;
			}
			return m.length === 1 ? val : val.substring(val.length - m.length);
		});
	}
	return fmt;
};


/**
 * 将一个日期格式化成友好格式，比如，1分钟以内的返回“刚刚”，
 * 当天的返回时分，当年的返回月日，否则，返回年月日
 * @param {Object} date
 */
export const formatFriendlyDate = (date: Date | number | string): string => {
	date = parseDate(date);
	if (!date) {
		return '';
	}
	const now = new Date();
	const diff = now.getTime() - date.getTime();
	// 1分钟以内返回 刚刚
	if (diff < 60 * 1000) return '刚刚';
	// 1小时以内返回 x分钟前
	if (diff < 60 * 60 * 1000) return `${Math.floor(diff / 60000)}分钟前`;
	const ymd = formatDate(date, 'yyyy年M月d');
	// 当天返回 时:分
	if (ymd === formatDate(now, 'yyyy年M月d')) return formatDate(date, 'HH:mm');
	// 当年返回 月:日
	if (date.getFullYear() === now.getFullYear()) return formatDate(date, 'M月d日');
	// 否则返回 年:月:日
	return ymd;
};


/**
 * 休息一段时间，单位毫秒
 * 示例：await sleep(200); // 休息200毫秒
 * @param ms 要休息的时间，单位毫秒，不传默认0
 * @returns
 */
export const sleep = (ms?: number) => new Promise(resolve => setTimeout(resolve, ms || 0));

/**
 * 将一段单位为秒的时长格式化成时间格式，例如：
 * formatDuration(100) // 01:40
 * formatDuration(10000) // 02:46:40
 * 注意，如果天或者小时为0会过滤不展示
 * @param duration 要格式化的时长，单位秒
 * @param fmt 目标格式，默认 d:hh:mm:ss 可以完全自定义，例如 d天hh小时mm分钟ss秒
 * @returns 返回类似 01:40 的字符串
 */
export const formatDuration = (duration: number, fmt: string = 'd:hh:mm:ss') => {
	const values: Record<string, number> = {
		d: Math.floor(calc(`${duration} / 86400`)), // 24 * 3600
		h: Math.floor(calc(`${calc(`${duration} % 86400`)} / 3600`)),
		m: Math.floor(calc(`${calc(`${duration} % 3600`)} / 60`)),
		// 如果不采用 big.js 可能会有精度问题，例如： 255.692 % 60
		s: calc(`${duration} % 60`),
	};
	if (values.h === 0) fmt = fmt.replace(/^[^m]+/g, '');
	else if (values.d === 0) fmt = fmt.replace(/^[^h]+/g, '');
	for (const i in values) {
		fmt = fmt.replace(new RegExp(`${i}+`, 'g'), (m) => {
			const val = `${values[i]}`;
			return m.length > 1 ? val.padStart(m.length, '0') : val;
		});
	}
	return fmt;
};

/**
 * 判断某一年是否是闰年
 * @param year 可以是一个date类型，也可以是一个int类型的年份，不传默认当前时间
 */
export const isLeapYear = (year: number | Date) => {
	if (year === undefined) year = new Date();
	if (year instanceof Date) year = year.getFullYear();
	return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

/**
 * 获取某一年某一月的总天数，没有任何参数时获取当前月份的
 * 方式一：getMonthDays();
 * 方式二：getMonthDays(new Date());
 * 方式三：getMonthDays(2017, 2);
 */
export const getMonthDays = (year?: number | Date, month?: number) => {
	const m = month - 1;
	year = year || new Date();
	if (year instanceof Date) {
		month = year.getMonth();
		year = year.getFullYear();
	}
	// 非闰年的一年中每个月份的天数
	const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	// 闰年2月是29天
	if (m === 1 && isLeapYear(year)) return days[m] + 1;
	return days[m];
};
