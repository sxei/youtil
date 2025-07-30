import { Converter, Renderer } from 'typedoc';
import fs from 'fs-extra';

const prefix = './markdown/api/';

const updateFrontMatter = (filePath, content) => {
	const path = filePath.indexOf('./markdown') === 0 ? filePath : `${prefix}${filePath}`;
	const rawContent = fs.readFileSync(path, { encoding: 'utf8' });
	console.log(filePath, rawContent.startsWith('---'));
	fs.writeFileSync(path, rawContent.startsWith('---') ? rawContent.replace(/^---/g, `---\n${content}`) : `---
${content}
---
${rawContent}`, { encoding: 'utf8' });
};


/**
 * 同步获取目录下所有文件路径
 * @param {string} dirPath 目标目录路径
 * @returns {string[]} 文件路径数组
 */
function listFiles(dirPath) {
	const items = fs.readdirSync(dirPath);
	let results = [];
	items.forEach((item) => {
	  const fullPath = `${dirPath}/${item}`;
	  const stat = fs.statSync(fullPath);
	  if (stat.isFile()) {
		results.push(fullPath);
	  } else if (stat.isDirectory()) {
		results = results.concat(listFiles(fullPath));
	  }
	});
	return results;
  }

export function load(app) {
	// 在转换完成后执行
	app.renderer.on(Renderer.EVENT_END, () => {
		console.log('Typedoc 转换完成，开始执行自定义代码...');

		fs.removeSync('./markdown/api/README.md');
		for (const filePath of listFiles('./markdown/api')) {
			// console.log(filePath);
			if (filePath.endsWith('.md') && !filePath.endsWith('globals.md')) {
				updateFrontMatter(filePath, `toc: content\ntitle: ${filePath.split('/').pop().replace('.md', '')}`);
			}
		}
		updateFrontMatter('globals.md', 'nav: API\ntitle: API索引');
		updateFrontMatter('functions/request.md', 'nav:\n    second: 方法');
		updateFrontMatter('interfaces/IRequestOptions.md', 'nav:\n    second: 接口定义');
		updateFrontMatter('variables/keyCodes.md', 'nav:\n    second: 变量');

		console.log('自定义代码执行完毕！');
	});
}
