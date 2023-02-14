// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  format: ['esm', 'cjs'],
  tsconfig: './tsconfig.json',
  dts: true,
  sourcemap: false,
  splitting: false,
  minify: true,
});
