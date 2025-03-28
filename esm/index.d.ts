export * from './loading';
export * from './param';
export * from './request';
export * from './time';
/**
 * 基于JSON的简单深拷贝
 * @param obj 要复制的对象，非对象格式会直接返回
 * @returns
 */
export declare const deepCopy: (obj: any) => any;
/**
 * HTML编码，例如将 【"】 变成 【&quot;】
 * @param {*} html 待编码的原始字符串，如果传入对象会遍历处理
 * @returns
 */
export declare const encodeHtml: (html: string | any) => any;
/**
 * HTML解码，例如将 【&quot;】 变成 【"】
 * @param {*} html 已经被HTML编码过的字符串，如果传入对象会遍历处理
 * @returns
 */
export declare const decodeHtml: (html: string | any) => any;
/**
 * 复制一段文本到剪贴板，如果失败会抛出异常，推荐使用姿势：
 * await copyTextToClipboard('要复制的文本', message => alert(`复制到剪贴板失败：${message}`));
 * alert('复制到剪贴板成功！');
 * @param {*} text 要复制的文本
 * @param {*} onFailure 失败回调，接受一个 message 参数
 * @param {*} supportSilent 是否支持后台静默复制，如果是则优先采用 execCommand
 * @returns
 */
export declare const copyToClipboard: (text: string, onFailure: (message: string) => void, supportSilent: boolean) => Promise<void>;
