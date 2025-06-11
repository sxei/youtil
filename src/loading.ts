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
        hasMask: false,
        maskColor: '#00000070',
        onCancel: null,
        cancelInline: false,
        id: 'com_global_page_loading',
    };
    config = Object.assign({}, defaultConfig, config);
    const { id, hasMask, maskColor, onCancel, cancelInline } = config;
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
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            pointer-events: none;
            z-index: 10000;
        }
        .${id}.show-mask {
            pointer-events: unset;
            background: #00000070;
        }
        .${id} .mask-wrapper {
            position: fixed;
        }
        .${id} .loading-wrapper {
            width: 120px;
            height: 120px;
            z-index: 8000;
            background: rgba(0, 0, 0, 0.6);
            border-radius: 8px;
            text-align: center;
            color: white;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            pointer-events: initial;
            line-height: 1.3;
        }
        .${id} .loading-wrapper img {
            width: 50px;
            height: 50px;
            margin-bottom: 10px;
        }
        .${id} .loading-wrapper a {
            color: #6ab2ff;
        }`;
        document.head.appendChild(style);
    }
    dom.innerHTML = `
        <div class="loading-wrapper">
            <img src="https://img.alicdn.com/tfs/TB1bnUsQBLoK1RjSZFuXXXn0XXa-32-32.svg" alt="加载中">
            <div>
                <span>${text}</span>
                ${cancelInline ? '' : '<br />'}
                ${onCancel ? '<a href="javascript:;" class="cancel">取消</a>' : ''}
            </div>
        </div>`;
    if (onCancel) {
        const btn = dom.querySelector('.cancel');
        btn && btn.addEventListener('click', () => {
            hideLoading();
            onCancel();
        });
    }
    dom.addEventListener('click', () => {
        hideLoading();
    });
    dom.style.display = 'flex';
    dom.style.background = hasMask ? maskColor : 'transparent';
    dom.className = `${id} ${hasMask ? 'show-mask' : ''}`;
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
