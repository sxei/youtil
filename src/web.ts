/**
 * 新标签打开某个地址
 * @param url 要打开的地址
 */
export const openNewTab = (url: string) => {
	const a = document.createElement('a');
	a.href = url;
	a.target = '_blank';
	a.click();
};


/**
 * 触发文件下载
 * @param url - 下载链接
 * @param downloadName - 下载文件名（可选）
 * 【重要说明】关于 downloadName 参数的生效条件：
 *  - 同源：download 属性 > Content-Disposition 头 > URL 中的文件名
 *  - 跨域：Content-Disposition 头 > URL 中的文件名（download 属性被忽略）
 *  Content-Disposition示例：
 *  Content-Disposition: attachment; filename="example.pdf"
 */
export const makeDownload = (url: string, downloadName?: string) => {
	if (!url) return;
	const a = document.createElement('a');
	a.href = url;
	document.body.appendChild(a);
	if (downloadName) {
		a.download = downloadName;
	}
	a.click();
	document.body.removeChild(a);
};

export interface ILoadScriptOption {
	/** 用于判断重复加载的全局变量 */
	globalKey?: string;
	/** 超时时间，单位毫秒，默认 5000 */
	timeout?: number;
}

/**
 * 异步加载某个脚本，如果失败会抛出异常
 * @param scriptUrl 脚本地址
 * @param options 可选配置
 * @returns 成功不会返回任何内容
 */
export const loadScript = (scriptUrl: string, options: ILoadScriptOption = {}) => {
	const { globalKey, timeout = 5000 } = options;
	// 全局变量校验
	if (globalKey && window[globalKey as any]) {
		return Promise.resolve();
	}
	// 新增超时逻辑：Promise.race([加载脚本, 超时定时器])
	return Promise.race([
		new Promise<void>((resolve, reject) => {
			const script = document.createElement('script');
			script.src = scriptUrl;
			script.async = true;
			script.onload = () => resolve();
			script.onerror = () => reject(new Error(`脚本加载失败：${scriptUrl}`));
			document.head.appendChild(script);
		}),
		// 超时定时器
		new Promise((_, reject) => {
			setTimeout(() => reject(new Error(`脚本加载超时（${timeout}ms）：${scriptUrl}`)), timeout);
		}),
	]);
};


export interface ISelectFileOption {
	/** 是否允许多选，默认否，注意无论是否多选，返回结果都是数组 */
	multiple?: boolean;
	/** 支持的文件格式，默认全部，格式类似 'image/*,video/mp4' 这种 */
	accept?: string;
	/** picker模式时自定义文件格式中文描述，默认“自定义文件” */
	acceptDescription?: string;
	/** 是否强制 input[file] 模式，默认为自动 */
	forceInputMode?: boolean;
}

/**
 * 通用文件选择方法（优先现代API，不支持再降级为传统input模式）
 * @param {Object} [options={}] - 配置参数
 * @returns {Promise<Array<File>>} - 返回选择的 File 对象数组，取消选择返回空数组
 */
export const selectFile = async (options: ISelectFileOption = {}) => {
	const { multiple = false, accept = '', acceptDescription = '自定义文件', forceInputMode } = options || {};
	// 2. 解析 accept 字符串，转换为 showOpenFilePicker 所需的 types 格式
	const convertAcceptToPickerTypes = (acceptStr: string) => {
		if (!acceptStr) return [];
		// 忽略后缀名格式的 accept，只支持 mime 格式
		const mimes = acceptStr.split(',').map(item => item.trim()).filter(item => item?.includes('/'));
		if (mimes.length === 0) return [];
		const acceptConfig: Record<string, any[]> = {};
		mimes.forEach(mime => acceptConfig[mime] = []);
		return [{
			description: acceptDescription,
			accept: acceptConfig,
		}];
	};
	return new Promise<File[]>((resolve) => {
		// 方案一：优先使用现代 API showOpenFilePicker
		if ((window as any).showOpenFilePicker && !forceInputMode) {
			(window as any).showOpenFilePicker({
				multiple,
				types: convertAcceptToPickerTypes(accept)
			}).then(async (fileHandles: any[]) => {
				// 转换文件句柄为标准 File 对象数组
				const fileList = await Promise.all(fileHandles.map(handle => handle.getFile()));
				resolve(fileList);
			}).catch((err: Error) => {
				console.error(err);
				resolve([]);
			});
			return;
		}
		// 方案二：兜底使用 <input type='file'>
		const input = document.createElement('input');
		input.type = 'file';
		input.style.display = 'none';
		if (multiple) input.multiple = true;
		input.accept = accept || '*';
		input.onchange = (e: any) => resolve([...(e.target.files || [])]);
		input.click();
	});
};
