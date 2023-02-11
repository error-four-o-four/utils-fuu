import { build } from 'tsup';
import { readdirSync } from 'fs';

const directories = readdirSync('./packages');

const defaultOptions = {
  clean: true,
  format: ['esm', 'cjs'],

  tsconfig: './tsconfig.json',
  dts: true,
  sourcemap: false,
  splitting: false,
  minify: false,
  // legacyOutput: true,
};

for (const name of directories) {
  const entry = [`./packages/${name}/index.ts`];
  const outDir = `./packages/${name}/dist`;

  const options = {
    ...defaultOptions,
    entry,
    outDir,
  };

  await build(options);

  console.log(`Built package - ${name}\n`);
}
