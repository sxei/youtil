
/**
 * 将日期格式化成指定格式的字符串
 * @param date 要格式化的日期，不传时默认当前时间，也可以是一个时间戳等
 * @param fmt 目标字符串格式，支持的字符有：y,M,d,q,w,H,h,m,S，默认：yyyy-MM-dd HH:mm:ss
 * @returns 返回格式化后的日期字符串
 */
export const formatDate = (date?: Date | number | string, fmt?: string) => {
	if (!date) {
		return '';
	}
	if (typeof date === 'number') {
		// 1687682453445
		date = new Date(date);
	} else if (typeof date === 'string') {
		if (/^\d{12,13}$/g.test(date)) {
			// '1687682453445'
			date = new Date(parseInt(date, 10));
		} else if (/^.{10}T.{8,12}Z?$/g.test(date) || /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/g.test(date)) {
			// '2019-01-01T00:00:00.000Z'
			// 2025-08-12 12:23:44
			date = new Date(date);
		} else {
			// 其它不能处理的字符串类型，直接原样返回
			return date;
		}
	}
	if (!(date instanceof Date)) {
		throw new Error('formatDate error: not date.');
	}
	if (isNaN(date?.getFullYear())) {
		throw new Error('formatDate error: invalid date.');
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
 * 将字符串解析成日期
 * @param str 输入的日期字符串，如'2014-09-13'
 * @param fmt 字符串格式，默认'yyyy-MM-dd'，支持如下：y、M、d、H、m、s、S，不支持w和q
 * @returns 解析后的Date类型日期
 */
export const parseDate = (str: string, fmt?: string) => {
	fmt = fmt || 'yyyy-MM-dd';
	const obj: any = { y: 0, M: 1, d: 0, H: 0, h: 0, m: 0, s: 0, S: 0 };
	fmt.replace(/([^yMdHmsS]*?)(([yMdHmsS])\3*)([^yMdHmsS]*?)/g, (m, $1, $2, $3, $4) => {
		str = str.replace(new RegExp(`${$1}(\\d{${$2.length}})${$4}`), (_m, _$1) => {
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
		d: Math.floor(duration / 86400), // 24 * 3600
		h: Math.floor((duration % 86400) / 3600),
		m: Math.floor((duration % 3600) / 60),
		s: duration % 60,
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

/**
 * 将一个日期格式化成友好格式，比如，1分钟以内的返回“刚刚”，
 * 当天的返回时分，当年的返回月日，否则，返回年月日
 * @param {Object} date
 */
// formatDateToFriendly: function(date)
// {
// 	date = date || new Date();
// 	date = typeof date === 'number' ? new Date(date) : date;
// 	var now = new Date();
// 	if((now.getTime() - date.getTime()) < 60*1000) return '刚刚'; // 1分钟以内视作“刚刚”
// 	var temp = this.formatDate(date, 'yyyy年M月d');
// 	if(temp == this.formatDate(now, 'yyyy年M月d')) return this.formatDate(date, 'HH:mm');
// 	if(date.getFullYear() == now.getFullYear()) return this.formatDate(date, 'M月d日');
// 	return temp;
// },
