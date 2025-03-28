
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
        } else if (/^.{10}T.{8,12}Z?$/g.test(date)) {
            // '2019-01-01T00:00:00.000Z'
            date = new Date(date);
        } else {
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
    // eslint-disable-next-line guard-for-in
    for (const i in obj) {
        fmt = fmt.replace(new RegExp(`${i}+`, 'g'), function (m) {
            let val = `${obj[i]}`;
            if (i === 'w') {
                return (m.length > 2 ? '星期' : '周') + week[val];
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
    fmt.replace(/([^yMdHmsS]*?)(([yMdHmsS])\3*)([^yMdHmsS]*?)/g, function (m, $1, $2, $3, $4) {
        str = str.replace(new RegExp(`${$1}(\\d{${$2.length}})${$4}`), function (_m, _$1) {
            obj[$3] = parseInt(_$1);
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
