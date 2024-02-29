import { defineConfig } from '@ice/pkg';

// https://pkg.ice.work/reference/config
export default defineConfig({
  transform: {
    // 供项目中引入使用的构建产物，输出在 esm 文件夹
    formats: ['esm'],
  },
  bundle: {
    // 供浏览器消费的构建产物，输出在 dist 文件夹
    formats: ['esm', 'umd'],
    // 不关闭此配置的话导出的JS会比较冗余
    polyfill: false,
  },
  plugins: [
    [
      '@ice/pkg-plugin-docusaurus', 
      {
        title: 'youtil文档',
        onBrokenLinks: 'warn',
        navBarLogo: 'static/1.jpg',
        navBarTitle: 'youtil (油梯)'
      },
    ],
  ],
});
