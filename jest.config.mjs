import pkgService, { defineJestConfig } from '@ice/pkg';

export default defineJestConfig(pkgService, {
  // 你也可以使用 @swc/jest 编译 TS 代码
  preset: 'ts-jest',
});
