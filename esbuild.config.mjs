import { build } from 'esbuild';
import { dtsPlugin } from 'esbuild-plugin-d.ts';
import fs from 'fs-extra';

fs.emptyDirSync('./dist');

const tsconfig = {
	compilerOptions: {
		declaration: true, // 生成 .d.ts
		emitDeclarationOnly: true, // 只生成类型，不编译代码
		outDir: './dist/types', // 输出目录
		module: 'ESNext',
		moduleResolution: 'Node',
		esModuleInterop: true,
		skipLibCheck: true,
	},
	include: ['src'],
	exclude: ['node_modules'],
};

await build({
	entryPoints: ['src/index.ts'],
	outfile: 'dist/index.mjs',
	bundle: true,
	minify: true,
	sourcemap: false,
	format: 'esm',
	target: ['es2017'],
	platform: 'neutral', // 同时支持浏览器和Node.js
	plugins: [
		dtsPlugin({
			tsconfig,
		}),
	],
});
await build({
	entryPoints: ['src/index.ts'],
	outfile: 'dist/index.umd.js',
	bundle: true,
	minify: true,
	sourcemap: false,
	format: 'iife',
	globalName: 'youtil',
	target: ['es2017'],
	platform: 'browser',
});

console.log('构建成功！');
