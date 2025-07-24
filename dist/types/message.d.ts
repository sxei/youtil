type onMessageListener = (eventName?: string, ...payload: any[]) => Promise<any> | any;
/**
 * 初始化窗口通信
 * @param {string} scene 场景，必传，互相通信的2个窗口必须保证 scene 相同
 * @param {Window} targetWindow 目标窗口对象(父窗口或子窗口)，互相通信时允许有一方不传，自动从 event.source 获取
 * @returns {{postMessage: function, onMessage: function}} 返回postMessage和onMessage方法
 */
export declare function initWindowMessage(scene: string, targetWindow?: Window): {
    postMessage: <T>(eventName: string, ...payload: any[]) => Promise<T> | void;
    onMessage: (eventName: string, listener: onMessageListener) => void;
};
export {};
