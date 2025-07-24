import { defineConfig } from 'dumi';

export default defineConfig({
  // github pages 只能叫这个名字
  outputPath: 'docs',
  themeConfig: {
    logo: 'https://cn.vuejs.org/logo.svg',
    name: 'youtil',
    footer: 'Power by youtil',
  },
  favicons: ['https://cn.vuejs.org/logo.svg'],
  // 开启组件文档自动生成
  apiParser: {
  },
  resolve: {
    docDirs: ['markdown'],
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
  },
  styles: [`
/* 隐藏二级导航 */
.dumi-default-navbar-collapse-btn {
    display: none;
}
.dumi-default-navbar-dropdown {
    display: none;
}
    `]
});
