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
export const showLoading = (text = '请稍候', seconds = 10, config: IShowLoadingConfig = {}) => {
    const defaultConfig: IShowLoadingConfig = {
        hasMask: true,
        maskColor: 'transparent',
        onCancel: null,
        cancelInline: false,
        id: 'com_global_page_loading',
    };
    config = Object.assign({}, defaultConfig, config);
    const { id } = config;
    const timeoutKey = `_${id}_timeout`;
    if ((window as any)[timeoutKey]) {
        clearTimeout((window as any)[timeoutKey]);
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
            hideLoading();
            config.onCancel();
        });
    }
    dom.style.display = 'block';
    if (seconds > 0) {
        (window as any)[timeoutKey] = setTimeout(() => {
            hideLoading();
        }, seconds * 1000);
    }
};

/**
 * 主动关闭loading提示
 */
export const hideLoading = () => {
    const id = 'com_global_page_loading';
    const loading = document.getElementById(id);
    if (loading) {
        loading.style.display = 'none';
    }
};
