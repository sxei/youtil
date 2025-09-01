/**
 * 将日期格式化成指定格式的字符串
 * @param date 要格式化的日期，不传时默认当前时间，也可以是一个时间戳等
 * @param fmt 目标字符串格式，支持的字符有：y,M,d,q,w,H,h,m,S，默认：yyyy-MM-dd HH:mm:ss
 * @returns 返回格式化后的日期字符串
 */
export declare const formatDate: (date?: Date | number | string, fmt?: string) => string;
/**
 * 将字符串解析成日期
 * @param str 输入的日期字符串，如'2014-09-13'
 * @param fmt 字符串格式，默认'yyyy-MM-dd'，支持如下：y、M、d、H、m、s、S，不支持w和q
 * @returns 解析后的Date类型日期
 */
export declare const parseDate: (str: string, fmt?: string) => Date;
/**
 * 休息一段时间，单位毫秒
 * 示例：await sleep(200); // 休息200毫秒
 * @param ms 要休息的时间，单位毫秒，不传默认0
 * @returns
 */
export declare const sleep: (ms?: number) => Promise<unknown>;
/**
 * 将一段单位为秒的时长格式化成时间格式，例如：
 * formatDuration(100) // 01:40
 * formatDuration(10000) // 02:46:40
 * 注意，如果天或者小时为0会过滤不展示
 * @param duration 要格式化的时长，单位秒
 * @param fmt 目标格式，默认 d:hh:mm:ss 可以完全自定义，例如 d天hh小时mm分钟ss秒
 * @returns 返回类似 01:40 的字符串
 */
export declare const formatDuration: (duration: number, fmt?: string) => string;
/**
 * 判断某一年是否是闰年
 * @param year 可以是一个date类型，也可以是一个int类型的年份，不传默认当前时间
 */
export declare const isLeapYear: (year: number | Date) => boolean;
/**
 * 获取某一年某一月的总天数，没有任何参数时获取当前月份的
 * 方式一：getMonthDays();
 * 方式二：getMonthDays(new Date());
 * 方式三：getMonthDays(2017, 2);
 */
export declare const getMonthDays: (year?: number | Date, month?: number) => number;
/**
 * 将一个日期格式化成友好格式，比如，1分钟以内的返回“刚刚”，
 * 当天的返回时分，当年的返回月日，否则，返回年月日
 * @param {Object} date
 */
