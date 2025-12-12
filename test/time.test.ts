import {
	formatDate,
	parseDate,
	formatFriendlyDate,
	sleep,
	formatDuration,
	isLeapYear,
	getMonthDays,
} from '../src';

describe('formatDate', () => {
	test('不传参数时返回空字符串', () => {
		expect(formatDate()).toBe('');
	});

	test('时间戳数字格式化', () => {
		expect(formatDate(1675943103348)).toBe('2023-02-09 19:45:03');
		expect(formatDate(0)).toBe('1970-01-01 08:00:00');
	});

	test('时间戳字符串格式化', () => {
		expect(formatDate('1675943103348')).toBe('2023-02-09 19:45:03');
		expect(formatDate('167594310334')).toBe('1970-01-01 08:00:00');
	});

	test('ISO 日期字符串格式化', () => {
		expect(formatDate('2023-02-09T11:45:03Z')).toBe('2023-02-09 19:45:03');
		expect(formatDate('2023-02-09T11:45:03.000Z')).toBe('2023-02-09 19:45:03');
	});

	test('Date 对象格式化', () => {
		const date = new Date('2023-02-09T11:45:03Z');
		expect(formatDate(date)).toBe('2023-02-09 19:45:03');
	});

	test('自定义格式', () => {
		expect(formatDate(1675943103348, 'yyyy-MM-dd')).toBe('2023-02-09');
		expect(formatDate(1675943103348, 'yyyy年MM月dd日')).toBe('2023年02月09日');
		expect(formatDate(1675943103348, 'HH:mm:ss')).toBe('19:45:03');
		expect(formatDate(1675943103348, 'yyyy/MM/dd HH:mm')).toBe('2023/02/09 19:45');
	});

	test('季度和星期格式化', () => {
		const date = new Date('2023-02-09T11:45:03Z');
		expect(formatDate(date, 'yyyy年第q季度')).toContain('2023年');
		expect(formatDate(date, 'w')).toMatch(/^[0-6]$/);
		expect(formatDate(date, 'ww')).toContain('星期');
		expect(formatDate(date, 'www')).toContain('星期');
	});

	test('12小时制格式化', () => {
		expect(formatDate(1675943103348, 'hh:mm:ss')).toBe('07:45:03');
		expect(formatDate(1675943103348, 'h:mm:ss')).toBe('7:45:03');
	});

	test('毫秒格式化', () => {
		const date = new Date('2023-02-09T11:45:03.348Z');
		expect(formatDate(date, 'yyyy-MM-dd HH:mm:ss.SSS')).toContain('.348');
	});
});

describe('parseDate', () => {
	test('不传参数返回 null', () => {
		expect(parseDate(null as any)).toBeNull();
		expect(parseDate(undefined as any)).toBeNull();
		expect(parseDate('')).toBeNull();
	});

	test('Date 对象直接返回', () => {
		const date = new Date('2023-02-09T11:45:03Z');
		expect(parseDate(date)).toBe(date);
	});

	test('数字时间戳解析', () => {
		const date = parseDate(1675943103348);
		expect(date).toBeInstanceOf(Date);
		expect(date?.getTime()).toBe(1675943103348);
	});

	test('字符串时间戳解析', () => {
		const date = parseDate('1675943103348');
		expect(date).toBeInstanceOf(Date);
		expect(date?.getTime()).toBe(1675943103348);
	});

	test('ISO 日期字符串解析', () => {
		const date = parseDate('2023-02-09T11:45:03Z');
		expect(date).toBeInstanceOf(Date);
		expect(date?.getFullYear()).toBe(2023);
		expect(date?.getMonth()).toBe(1); // 2月是1
		expect(date?.getDate()).toBe(9);
	});

	test('标准日期时间字符串解析', () => {
		const date = parseDate('2023-02-09 19:45:03', 'yyyy-MM-dd HH:mm:ss');
		expect(date).toBeInstanceOf(Date);
		expect(date?.getFullYear()).toBe(2023);
		expect(date?.getMonth()).toBe(1);
		expect(date?.getDate()).toBe(9);
		expect(date?.getHours()).toBe(19);
		expect(date?.getMinutes()).toBe(45);
		expect(date?.getSeconds()).toBe(3);
	});

	test('自定义格式解析', () => {
		const date = parseDate('2023/02/09', 'yyyy/MM/dd');
		expect(date).toBeInstanceOf(Date);
		expect(date?.getFullYear()).toBe(2023);
		expect(date?.getMonth()).toBe(1);
		expect(date?.getDate()).toBe(9);
	});

	test('无效日期返回 null', () => {
		expect(parseDate('invalid-date')).toBeNull();
		expect(parseDate('abc123')).toBeNull();
	});
});

describe('formatFriendlyDate', () => {
	beforeEach(() => {
		// 使用固定的当前时间，避免测试结果随时间变化
		jest.useFakeTimers();
		jest.setSystemTime(new Date('2023-02-09T20:00:00Z'));
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	test('1分钟以内返回"刚刚"', () => {
		const date = new Date('2023-02-09T19:59:30Z');
		expect(formatFriendlyDate(date)).toBe('刚刚');
	});

	test('1小时以内返回"x分钟前"', () => {
		const date = new Date('2023-02-09T19:30:00Z');
		expect(formatFriendlyDate(date)).toBe('30分钟前');
	});

	test('当天返回时分格式', () => {
		const date = new Date('2023-02-09T10:30:00Z');
		expect(formatFriendlyDate(date)).toBe('18:30');
	});

	test('当年返回月日格式', () => {
		const date = new Date('2023-01-15T10:30:00Z');
		expect(formatFriendlyDate(date)).toBe('1月15日');
	});

	test('非当年返回年月日格式', () => {
		const date = new Date('2022-12-25T10:30:00Z');
		expect(formatFriendlyDate(date)).toBe('2022年12月25');
	});

	test('时间戳输入', () => {
		const timestamp = new Date('2023-02-09T19:30:00Z').getTime();
		expect(formatFriendlyDate(timestamp)).toBe('30分钟前');
	});

	test('字符串输入', () => {
		expect(formatFriendlyDate('2023-02-09T19:30:00Z')).toBe('30分钟前');
	});

	test('无效日期返回空字符串', () => {
		expect(formatFriendlyDate('invalid')).toBe('');
		expect(formatFriendlyDate(null as any)).toBe('');
	});
});

describe('sleep', () => {
	test('默认参数休眠0毫秒', async () => {
		const start = Date.now();
		await sleep();
		const end = Date.now();
		expect(end - start).toBeLessThan(10);
	});

	test('休眠指定毫秒数', async () => {
		const start = Date.now();
		await sleep(100);
		const end = Date.now();
		expect(end - start).toBeGreaterThanOrEqual(90);
		expect(end - start).toBeLessThan(150);
	});

	test('不传参数时休眠0毫秒', async () => {
		const start = Date.now();
		await sleep(undefined);
		const end = Date.now();
		expect(end - start).toBeLessThan(10);
	});
});

describe('formatDuration', () => {
	test('基本格式化 - 秒', () => {
		expect(formatDuration(40)).toBe('00:40');
		expect(formatDuration(100)).toBe('01:40');
	});

	test('基本格式化 - 分钟', () => {
		expect(formatDuration(3661)).toBe('01:01:01');
		expect(formatDuration(3600)).toBe('01:00:00');
	});

	test('基本格式化 - 小时', () => {
		expect(formatDuration(10000)).toBe('02:46:40');
		expect(formatDuration(3661)).toBe('01:01:01');
	});

	test('基本格式化 - 天', () => {
		expect(formatDuration(90000)).toBe('1:01:00:00');
		expect(formatDuration(172800)).toBe('2:00:00:00');
	});

	test('天为0时过滤', () => {
		expect(formatDuration(3600)).toBe('01:00:00');
		expect(formatDuration(3661)).toBe('01:01:01');
	});

	test('小时为0时过滤', () => {
		expect(formatDuration(60)).toBe('01:00');
		expect(formatDuration(100)).toBe('01:40');
	});

	test('自定义格式', () => {
		expect(formatDuration(3661, 'd天hh小时mm分钟ss秒')).toBe('0天01小时01分钟01秒');
		expect(formatDuration(90000, 'd天hh小时mm分钟ss秒')).toBe('1天01小时00分钟00秒');
	});

	test('单字符格式', () => {
		expect(formatDuration(3661, 'h:m:s')).toBe('1:1:1');
		expect(formatDuration(100, 'm:s')).toBe('1:40');
	});

	test('边界值', () => {
		expect(formatDuration(0)).toBe('00:00');
		expect(formatDuration(1)).toBe('00:01');
		expect(formatDuration(59)).toBe('00:59');
		expect(formatDuration(60)).toBe('01:00');
	});
});

describe('isLeapYear', () => {
	test('普通闰年（能被4整除但不能被100整除）', () => {
		expect(isLeapYear(2004)).toBe(true);
		expect(isLeapYear(2020)).toBe(true);
		expect(isLeapYear(2024)).toBe(true);
	});

	test('世纪闰年（能被400整除）', () => {
		expect(isLeapYear(2000)).toBe(true);
		expect(isLeapYear(1600)).toBe(true);
		expect(isLeapYear(2400)).toBe(true);
	});

	test('非闰年', () => {
		expect(isLeapYear(2001)).toBe(false);
		expect(isLeapYear(1900)).toBe(false);
		expect(isLeapYear(2100)).toBe(false);
		expect(isLeapYear(2023)).toBe(false);
	});

	test('Date 对象输入', () => {
		expect(isLeapYear(new Date('2020-01-01'))).toBe(true);
		expect(isLeapYear(new Date('2023-01-01'))).toBe(false);
		expect(isLeapYear(new Date('2000-01-01'))).toBe(true);
	});

	test('不传参数使用当前时间', () => {
		// 这个测试依赖于当前年份，2024年是闰年
		const result = isLeapYear(undefined as any);
		expect(typeof result).toBe('boolean');
	});
});

describe('getMonthDays', () => {
	test('获取指定年月天数', () => {
		expect(getMonthDays(2023, 1)).toBe(31); // 1月
		expect(getMonthDays(2023, 2)).toBe(28); // 2月（非闰年）
		expect(getMonthDays(2023, 3)).toBe(31); // 3月
		expect(getMonthDays(2023, 4)).toBe(30); // 4月
		expect(getMonthDays(2023, 5)).toBe(31); // 5月
		expect(getMonthDays(2023, 6)).toBe(30); // 6月
		expect(getMonthDays(2023, 7)).toBe(31); // 7月
		expect(getMonthDays(2023, 8)).toBe(31); // 8月
		expect(getMonthDays(2023, 9)).toBe(30); // 9月
		expect(getMonthDays(2023, 10)).toBe(31); // 10月
		expect(getMonthDays(2023, 11)).toBe(30); // 11月
		expect(getMonthDays(2023, 12)).toBe(31); // 12月
	});

	test('闰年2月29天', () => {
		expect(getMonthDays(2020, 2)).toBe(29); // 闰年
		expect(getMonthDays(2024, 2)).toBe(29); // 闰年
		expect(getMonthDays(2000, 2)).toBe(29); // 世纪闰年
	});

	test('非闰年2月28天', () => {
		expect(getMonthDays(2023, 2)).toBe(28);
		expect(getMonthDays(1900, 2)).toBe(28);
		expect(getMonthDays(2100, 2)).toBe(28);
	});

	test('Date 对象输入', () => {
		expect(getMonthDays(new Date('2023-02-01'))).toBe(28);
		expect(getMonthDays(new Date('2020-02-01'))).toBe(29);
		expect(getMonthDays(new Date('2023-01-01'))).toBe(31);
		expect(getMonthDays(new Date('2023-04-01'))).toBe(30);
	});

	test('不传参数使用当前时间', () => {
		const result = getMonthDays();
		expect(typeof result).toBe('number');
		expect(result).toBeGreaterThanOrEqual(28);
		expect(result).toBeLessThanOrEqual(31);
	});
});
