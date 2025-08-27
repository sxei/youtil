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
