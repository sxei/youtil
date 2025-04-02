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
