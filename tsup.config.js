import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: false,
  splitting: false,
  minify: true,
});
