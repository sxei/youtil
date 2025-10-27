import { defineConfig } from 'dumi';

export default defineConfig({
  // github pages 只能叫这个名字
  outputPath: 'docs',
  themeConfig: {
    logo: 'https://img10.360buyimg.com/imagetools/jfs/t1/316988/13/20626/79139/688a0b88F01a2c450/a6419401b21c0aef.png',
    name: 'youtil',
    footer: 'Power by youtil',
  },
  favicons: ['https://img10.360buyimg.com/imagetools/jfs/t1/316988/13/20626/79139/688a0b88F01a2c450/a6419401b21c0aef.png'],
  // 开启组件文档自动生成
  apiParser: {
  },
  resolve: {
    docDirs: ['markdown'],
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
  },
  scripts: ['https://unpkg.shop.jd.com/big.js@7.0.1/big.js', 'https://unpkg.shop.jd.com/youtil/dist/index.umd.js'],
  styles: [`
/* 隐藏二级导航 */
.dumi-default-navbar-collapse-btn {
  display: none;
}
.dumi-default-navbar-dropdown {
  display: none;
}
iframe {
  display: none;
}
body {
  -webkit-font-smoothing: antialiased;
}
    `]
});
