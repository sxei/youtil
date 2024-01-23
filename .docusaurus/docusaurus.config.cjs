// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const extractCode = require('@ice/pkg-plugin-docusaurus/remark/extractCode');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'youtil文档',
  tagline: 'ICE Component Cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans',],
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://img.alicdn.com/imgextra/i2/O1CN01jUf9ZP1aKwVvEc58W_!!6000000003312-73-tps-160-160.ico',

  plugins: [
    require.resolve('@ice/pkg-plugin-docusaurus/plugin.js'),
    [
      '/Users/lxa/workspaces/github/youtil/node_modules/_@docusaurus_plugin-content-pages@2.4.3@@docusaurus/plugin-content-pages/lib/index.js',
      {
        path: 'pages',
        routeBasePath: '/pages',
      }
    ],
    
  ],

  presets: [
    [
      '/Users/lxa/workspaces/github/youtil/node_modules/_@docusaurus_preset-classic@2.4.3@@docusaurus/preset-classic/lib/index.js',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          remarkPlugins: [
            [extractCode, { mobilePreview: false, baseUrl: '/', mobilePreviewUrlParams: '' }],
          ],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          routeBasePath: '/',
        },

        theme: {
          customCss: require.resolve('@ice/pkg-plugin-docusaurus/css/custom.css'),
        },

        // For demo preview in mobile mode.
        pages: {
          path: '.docusaurus/demo-pages',
          routeBasePath: '/demos',
          id: 'demo-pages'
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'youtil (油梯)',
        logo: {
          src: 'static/1.jpg',
        },
      },
      prism: {
        theme: require('/Users/lxa/workspaces/github/youtil/node_modules/_prism-react-renderer@1.3.5@prism-react-renderer/themes/github'),
        darkTheme: require('/Users/lxa/workspaces/github/youtil/node_modules/_prism-react-renderer@1.3.5@prism-react-renderer/themes/dracula'),
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
    }),
};

module.exports = config;
