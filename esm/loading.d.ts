/** showLoading配置 */
export interface IShowLoadingConfig {
    hasMask?: boolean;
    maskColor?: string;
    cancelInline?: boolean;
    onCancel?: Function;
    id?: string;
}
/**
 * 显示全局loading，不依赖任何框架
 * @param {*} text 提示文案
 * @param {*} seconds 超时自动关闭时间，单位秒
 * @param {*} options 可选配置
 */
export declare const showLoading: (text?: string, seconds?: number, config?: IShowLoadingConfig) => void;
/**
 * 主动关闭loading提示
 */
export declare const hideLoading: () => void;
