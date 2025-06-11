import fs from 'fs-extra';

// 恶心的 ice-pkg ，只能手动对打包文件进行处理

const pkg = await fs.readJson('./package.json');
pkg.module = 'es/index.mjs';
pkg.exports['.'].import = './es/index.mjs';
await fs.writeFile('./package.json', JSON.stringify(pkg, null, 2));

await fs.move('./dist/index.umd.es5.production.js', './umd/index.js', { overwrite: true });
await fs.move('./dist', './es', { overwrite: true });
fs.readdirSync('./es').forEach(fileName => {
    fs.moveSync(`./es/${fileName}`, `./es/${fileName.replace('.js', '.mjs')}`);
});
await fs.move('./es/index.esm.es5.production.mjs', './es/index.mjs', { overwrite: true });
const content = await fs.readFile('./es/index.mjs', { encoding: 'utf8' });
await fs.writeFile('./es/index.mjs', content.replace('.esm.es5.production.js', '.esm.es5.production.mjs'));
