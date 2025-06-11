/** requestAPI的第二个参数类型 */
export interface IRequestOptions {
    /** GET请求时传递的参数 */
    params?: Record<string, any>;
    /** POST请求时传递的参数 */
    data?: Record<string, any>;
    /** 采用formData模式请求，可以传入普通的对象，也可以传入标准的formData */
    formData?: Record<string, any>;
    /** postJson请求时传递的参数 */
    json?: Record<string, any>;
    /** API前缀，不传默认为空 */
    baseUrl?: string;
    /** 请求方法，绝大部分情况无需手动指定 */
    method?: string;
    /** headers */
    headers?: Record<string, any>;
    /** 其它自定义fetchOptions，优先级高于上面所有参数 */
    fetchOptions?: RequestInit;
    /** 请求完成之后触发的钩子，无论成功与否均会触发 */
    afterRequest?: (success: boolean, resp?: any) => void;
    /** 判断接口是否调用成功，默认规则 resp => resp.code == 0 || resp.code == 200 */
    checkSuccess?: (resp: any) => boolean;
    /** 对响应进行自定义格式化处理，包含 checkSuccess 全部能力 */
    responseConverter?: (resp: any) => any;
    /** 后端未返回 message 时的兜底异常文案 */
    errorMessage?: string;
    /** 发生异常时的处理方法，一般不太建议重写此方法 */
    errorHandler?: (message: string, resp?: any) => void;
    /** 自定义toast实现，为了和UI解耦，方法默认不包含UI处理代码 */
    toastHandler?: (message: string) => void;
    /** 是否关闭默认的异常toast */
    silent?: boolean;
    /** 自定义 fetch.then() ，非常底层的一个方法，非必要请勿使用 */
    onFetchResponse?: (response: Response) => any;
}
/**
 * 通用的API请求方法
 * @param url
 * @param options
 * @returns
 */
declare const request: {
    <T = any>(url: string, options?: IRequestOptions): Promise<T>;
    create: any;
};
export { request };
type IRequest = typeof request;
interface RequestConstructor {
    new (overrideOptions: IRequestOptions): IRequest;
    new (req: IRequest, overrideOptions: IRequestOptions): IRequest;
}
/**
 * 支持实例化一个新的request方法，覆盖默认的部分配置项
 * @deprecated 推荐使用 request.create() 实例化新的request
 */
export declare const Request: RequestConstructor;
