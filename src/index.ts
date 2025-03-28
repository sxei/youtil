export * from './loading';
export * from './param';
export * from './request';
export * from './time';

/**
 * 基于JSON的简单深拷贝
 * @param obj 要复制的对象，非对象格式会直接返回
 * @returns
 */
export const deepCopy = (obj: any) => {
    if (!obj || typeof obj !== 'object') {
        return obj;
    }
    return JSON.parse(JSON.stringify(obj));
};

/**
 * HTML编码，例如将 【"】 变成 【&quot;】
 * @param {*} html 待编码的原始字符串，如果传入对象会遍历处理
 * @returns
 */
export const encodeHtml = (html: string|any) => {
    if (typeof html === 'string') {
        const div = document.createElement('div');
        div.innerText = html;
        return div.innerHTML;
    } else if (typeof html === 'object' && html) {
        for (const i in html) {
            html[i] = encodeHtml(html[i]);
        }
    }
    return html;
};

/**
 * HTML解码，例如将 【&quot;】 变成 【"】
 * @param {*} html 已经被HTML编码过的字符串，如果传入对象会遍历处理
 * @returns
 */
export const decodeHtml = (html: string|any) => {
    if (typeof html === 'string') {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.innerText;
    } else if (typeof html === 'object' && html) {
        for (const i in html) {
            html[i] = decodeHtml(html[i]);
        }
    }
    return html;
};

/**
 * 复制一段文本到剪贴板，如果失败会抛出异常，推荐使用姿势：
 * await copyTextToClipboard('要复制的文本', message => alert(`复制到剪贴板失败：${message}`));
 * alert('复制到剪贴板成功！');
 * @param {*} text 要复制的文本
 * @param {*} onFailure 失败回调，接受一个 message 参数
 * @param {*} supportSilent 是否支持后台静默复制，如果是则优先采用 execCommand
 * @returns
 */
export const copyToClipboard = (text: string, onFailure: (message: string) => void, supportSilent: boolean) => {
    if (!text) {
        throw new Error('text can not be empty.');
    }
    onFailure = onFailure || (msg => console.error(`复制到剪贴板失败：${msg || ''}`));
    // 优先采用现代化API
    if (navigator.clipboard && !supportSilent) {
        // 注意 writeText API 要求：文档被激活 & 页面已启用HTTPS
        return navigator.clipboard.writeText(text).catch(e => {
            onFailure(e.message);
            throw e;
        });
    }
    // execCommand 原本是一个同步API，这里为了和 writeText 保持一致统一包成proimse
    return new Promise<void>((resolve, reject) => {
        const input = document.createElement('input');
        input.value = text;
        input.style.cssText = 'position:fixed;left:0;top:0;opacity:0;';
        document.body.appendChild(input);
        input.select();
        try {
            if (document.execCommand('copy')) {
                resolve();
            } else {
                const message = "Failed to execute 'document.execCommand'.";
                onFailure(message);
                reject(new Error(message));
            }
        } catch (e) {
            onFailure(e.message);
            reject(e);
        } finally {
            document.body.removeChild(input);
        }
    });
};

