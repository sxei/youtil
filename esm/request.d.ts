/** requestAPI的第二个参数类型 */
export interface IRequestOptions {
    /** GET请求时传递的参数 */
    params?: Record<string, any>;
    /** POST请求时传递的参数 */
    data?: Record<string, any>;
    /** postJson请求时传递的参数 */
    json?: Record<string, any>;
    /** API前缀，不传默认为空 */
    baseUrl?: string;
    /** 请求方法，一般情况下会自动处理无需手动传 */
    method?: string;
    /** headers */
    headers?: Record<string, any>;
    /** 其它自定义fetchOptions */
    fetchOptions?: RequestInit;
    /** 请求完成之后触发的钩子，无论成功与否均会触发 */
    afterRequest?: (success: boolean, resp?: any) => void;
    /** 对响应进行自定义格式化处理 */
    responseConverter?: (resp: any) => any;
    /** 后端未返回 message 时的默认异常文案 */
    errorMessage?: string;
    /** 发生异常时的处理方法，一般不太建议重写此方法 */
    errorHandler?: (message: string, resp?: any) => void;
    /** 自定义toast实现，为了和UI解耦，方法默认不包含UI处理代码 */
    toastHandler?: (message: string) => void;
    /** 判断接口是否调用成功，默认规则 resp => resp.code == 0 || resp.code == 200 */
    checkSuccess?: (resp: any) => boolean;
    /** 是否关闭默认的异常toast */
    silent?: boolean;
}
/**
 * 通用的API请求方法
 * @param url
 * @param options
 * @returns
 */
export declare const request: <T = any>(url: string, options?: IRequestOptions) => Promise<T>;
interface RequestConstructor {
    new (overrideDefaultOptions: IRequestOptions): typeof request;
}
/**
 * 支持实例化一个新的request方法，覆盖默认的部分配置项
 */
export declare const Request: RequestConstructor;
export {};
