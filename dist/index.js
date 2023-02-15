"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    /**
     * 将日期格式化成指定格式的字符串
     * @param date 要格式化的日期，不传时默认当前时间，也可以是一个时间戳
     * @param fmt 目标字符串格式，支持的字符有：y,M,d,q,w,H,h,m,S，默认：yyyy-MM-dd HH:mm:ss
     * @returns 返回格式化后的日期字符串
     */
    formatDate(date, fmt) {
        if (!date) {
            return '';
        }
        date = typeof date === 'number' ? new Date(date) : date;
        fmt = fmt || 'yyyy-MM-dd HH:mm:ss';
        const obj = {
            y: date.getFullYear(),
            M: date.getMonth() + 1,
            d: date.getDate(),
            q: Math.floor((date.getMonth() + 3) / 3),
            w: date.getDay(),
            H: date.getHours(),
            h: date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
            m: date.getMinutes(),
            s: date.getSeconds(),
            S: date.getMilliseconds(), // 毫秒
        };
        const week = ['天', '一', '二', '三', '四', '五', '六'];
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
    },
    /**
     * 将字符串解析成日期
     * @param str 输入的日期字符串，如'2014-09-13'
     * @param fmt 字符串格式，默认'yyyy-MM-dd'，支持如下：y、M、d、H、m、s、S，不支持w和q
     * @returns 解析后的Date类型日期
     */
    parseDate(str, fmt) {
        fmt = fmt || 'yyyy-MM-dd';
        const obj = { y: 0, M: 1, d: 0, H: 0, h: 0, m: 0, s: 0, S: 0 };
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
    },
    /**
     * 显示全局loading
     * @param {*} text
     * @param {*} seconds
     * @param {*} options
     */
    showLoading(text = '请稍候', seconds = 10, config = {}) {
        const defaultConfig = {
            hasMask: true,
            maskColor: 'transparent',
            onCancel: null,
            cancelInline: false,
            id: 'com_global_page_loading',
        };
        config = Object.assign({}, defaultConfig, config);
        const { id } = config;
        const timeoutKey = `_${id}_timeout`;
        if (window[timeoutKey]) {
            clearTimeout(window[timeoutKey]);
        }
        let dom = document.getElementById(id);
        if (!dom) {
            dom = document.createElement('div');
            dom.id = id;
            dom.className = id;
            document.body.append(dom);
        }
        const styleId = `${id}_style`;
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.innerHTML = `
            .${id} {
                position: fixed;
                top: calc(50vh - 60px);
                left: calc(50vw - 60px);
                width: 120px;
                height: 120px;
                z-index: 8000;
                background: rgba(0, 0, 0, 0.6);
                border-radius: 8px;
                text-align: center;
                color: white;
                padding-top: 20px;
            }
            .${id} img {
                width: 50px;
                margin-bottom: 10px;
            }`;
            document.head.appendChild(style);
        }
        dom.innerHTML = `
            ${config.hasMask ? `<div class="mask-wrapper" style="background-color: ${config.maskColor}"></div>` : ''}
            <div class="loading-wrapper">
                <div class="loading-content">
                    <img src="https://img.alicdn.com/tfs/TB1bnUsQBLoK1RjSZFuXXXn0XXa-32-32.svg" alt="加载中">
                    <div>${text}${config.cancelInline ? ' ' : '</div>'}
                    ${config.onCancel ? '<a href="javascript:;" class="cancel">取消</a>' : ''}
                    ${config.cancelInline ? '</div>' : ''}
                </div>
            </div>`;
        if (config.onCancel) {
            const btn = dom.querySelector('.cancel');
            btn && btn.addEventListener('click', () => {
                this.hideLoading();
                config.onCancel();
            });
        }
        dom.style.display = 'block';
        if (seconds > 0) {
            window[timeoutKey] = setTimeout(() => {
                this.hideLoading();
            }, seconds * 1000);
        }
    },
    // 隐藏全局loading
    hideLoading() {
        const id = 'com_global_page_loading';
        const loading = document.getElementById(id);
        if (loading) {
            loading.style.display = 'none';
        }
    },
    /**
     * 从URL中获取某个参数，如果不存在返回 undefined ，如果存在多个同名参数，返回第一个匹配值
     * getParam('a', '?a=1&b=&c=3&c=33#abc') // '1'
     * getParam('b', '?a=1&b=&c=3&c=33#abc') // ''
     * getParam('c', '?a=1&b=&c=3&c=33#abc') // 3
     * getParam('d', '?a=1&b=&c=3&c=33#abc') // undefined
     * @param {*} name 参数名
     * @param {*} url 要获取的URL，默认当前地址
     */
    getParam(name, url = location.search) {
        return (new RegExp(`(^|\\?|&)${name}=(.*?)(?=&|#|$)`, 'g').exec(url) || [])[2];
    },
    /**
     * 从URL中获取int参数
     * @param {*} name 参数名
     * @param {*} url 要获取的URL，默认当前地址
     */
    getParamInt(name, url = location.search) {
        return parseInt(this.getParam(name, url) || '0', 10);
    },
    /**
     * 获取某个URL的全部参数
     * getParams('?a=1&b=2#cc') // {a: '1', b: '2'}
     * @param url
     * @returns 参数对象
     */
    getParams(url = location.search) {
        const search = ((url || '').split('?').pop() || '').split('#')[0] || '';
        const params = {};
        search.split('&').map(item => item.split('=')).forEach(([key, value]) => {
            params[key] = value || '';
        });
        return params;
    },
    /**
     * 给URL设置参数，如果已经存在，替换之，兼容hash存在的情况
     * setParam('a', '123', '?a=1&b=2&a=3#d') // '?a=123&b=2&a=123#d'
     * setParam('d', '444', '?a=1&b=2&a=3#d') // '?a=1&b=2&a=3&d=444#d'
     * @param {Object} name 参数名
     * @param {Object} value 参数值
     * @param {Object} url 如果不传默认当前页面URL
     */
    setParam(name, value, url) {
        url = url || `${location.pathname}${location.search}`;
        // 如果参数已经存在，替换之
        if (this.getParam(name, url) !== undefined) {
            return url.replace(new RegExp(`(^|\\?|&)${name}=(.*?)(?=&|#|$)`, 'g'), `$1${name}=${value}`);
        }
        const [pathname, hash] = url.split('#'); // 处理存在hash的情况
        return `${pathname}${pathname.indexOf('?') < 0 ? '?' : '&'}${name}=${value}${hash ? '#' : ''}${hash || ''}`;
    },
    /**
     * 删除URL中某个参数
     * delParam('a', '?a=1&b=2&a=3#d') // '?b=2#d'
     * delParam('b', '?a=1&b=2&a=3#d') // '?a=1&a=3#d'
     * delParam('a', '?a=1#d') // '#d'
     * @param name 参数名
     * @param url 要删除的URL，默认当前页面URL
     * @returns 处理完后的URL
     */
    delParam(name, url) {
        url = url || `${location.pathname}${location.search}`;
        return url.replace(new RegExp(`(^|\\?|&)${name}=.*?(&|#|$)`, 'g'), (_m, $1, $2) => $2 === '&' ? $1 : $2);
    },
    /**
     * 休息一段时间，单位毫秒
     * 示例：await sleep(200); // 休息200毫秒
     * @param time 要休息的时间，单位毫秒，不传默认0
     * @returns
     */
    sleep: (time) => new Promise(resolve => setTimeout(resolve, time || 0)),
    /**
     * 基于JSON的简单深拷贝
     * @param obj 要复制的对象，非对象格式会直接返回
     * @returns
     */
    deepCopy: (obj) => {
        if (!obj || typeof obj !== 'object') {
            return obj;
        }
        return JSON.parse(JSON.stringify(obj));
    },
    /**
     * HTML编码，例如将 【"】 变成 【&quot;】
     * @param {*} html 待编码的原始字符串，如果传入对象会遍历处理
     * @returns
     */
    encodeHtml(html) {
        if (typeof html === 'string') {
            const div = document.createElement('div');
            div.innerText = html;
            return div.innerHTML;
        }
        else if (typeof html === 'object' && html) {
            for (const i in html) {
                html[i] = this.encodeHtml(html[i]);
            }
        }
        return html;
    },
    /**
     * HTML解码，例如将 【&quot;】 变成 【"】
     * @param {*} html 已经被HTML编码过的字符串，如果传入对象会遍历处理
     * @returns
     */
    decodeHtml(html) {
        if (typeof html === 'string') {
            const div = document.createElement('div');
            div.innerHTML = html;
            return div.innerText;
        }
        else if (typeof html === 'object' && html) {
            for (const i in html) {
                html[i] = this.decodeHtml(html[i]);
            }
        }
        return html;
    },
};
