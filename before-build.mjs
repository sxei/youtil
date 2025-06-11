import fs from 'fs-extra';

const pkg = await fs.readJson('./package.json');
pkg.module = 'esm/index.js';
pkg.exports['.'].import = './esm/index.js';
await fs.writeFile('./package.json', JSON.stringify(pkg, null, 4));
