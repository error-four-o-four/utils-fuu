import process from 'node:process';

import { resolve } from 'node:path';
import { defineConfig } from 'tsup';

export const defaultConfig = {
  clean: true,
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: false,
  splitting: false,
  minify: true,
};

export const getPackageOptions = (directory) => {
  // const entry = [resolve(directory, 'index.ts')]; // 🐛
  const entry = [`${directory}/index.ts`];
  // const outDir = resolve(directory, 'dist');
  const outDir = `${directory}/dist`;

  const minify = process.env.NODE_ENV
    ? !process.env.NODE_ENV.startsWith('dev')
    : true;

  const tsconfig = resolve(directory, 'tsconfig.json');

  return defineConfig({
    ...defaultConfig,
    entry,
    outDir,
    minify,
    tsconfig,
  });
};
