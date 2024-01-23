import { defineConfig } from '@ice/pkg';

// https://pkg.ice.work/reference/config
export default defineConfig({
  // 供项目中引入使用的构建产物，输出在 esm 文件夹
  transform: {
    formats: ['esm'],
  },
  // 供浏览器使用的dist输出配置
  bundle: {
    formats: ['esm', 'umd'],
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
