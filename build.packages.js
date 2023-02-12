import { build } from 'tsup';
import process from 'node:process';
import { existsSync, readdirSync } from 'node:fs';

const directories =
  process.argv.length >= 2
    ? [...process.argv.slice(2)]
    : readdirSync('./packages');

console.log(
  `Attempting to build package${
    directories.length === 1 ? '' : 's'
  }: ${directories.join(', ')}`
);

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
  const directory = `./packages/${name}`;

  if (!existsSync(directory)) {
    console.warn(`No such package found: ${name}`);
    continue;
  }

  const entry = [`${directory}/index.ts`];
  const outDir = `${directory}/dist`;

  const options = {
    ...defaultOptions,
    entry,
    outDir,
  };

  await build(options);

  console.log(`Built package - ${name}\n`);
}
