import { defineConfig } from '@ice/pkg';

// https://pkg.ice.work/reference/config-list
export default defineConfig({
  transform: {
    formats: ['esm', 'cjs'],
  },
  bundle: {
    formats: ['esm', 'cjs', 'umd'],
    name: 'youtil',
  },
    plugins: [
        [
          '@ice/pkg-plugin-docusaurus', 
          {
            title: 'youtil文档',
            onBrokenLinks: 'warn',
          },
        ],
      ],
});
