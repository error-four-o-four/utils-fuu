import process from 'node:process';
import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';

import { defineConfig, build } from 'tsup';
import checkbox from '@inquirer/checkbox';

const readJsonSync = (file) => JSON.parse(readFileSync(file));

const root = process.cwd();
const jsonPath = resolve(root, 'package.json');
const { dependencies } = readJsonSync(jsonPath);

const choices = Object.entries(dependencies).map(([name, value]) => {
  const directory = value.replace('file:', './');
  return {
    name: ` ${name}`,
    value: { name, directory },
    checked: true,
  };
});

// "build:dev": "SET NODE_ENV=dev & node ./tsup.build.js",
// "build": "node ./tsup.build.js",
// "publish": "node ./publish.pkgs.js"

const packages = await checkbox({
  name: 'packages',
  message: 'Select packages',
  choices,
});

const defaultConfig = {
  clean: true,
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: false,
  splitting: false,
  minify: true,
};

const getPackageOptions = (directory) => {
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

const buildPackages = async () => {
  const result = {
    builds: [],
    errors: [],
  };

  for (const { name, directory } of packages) {
    try {
      const options = getPackageOptions(directory);

      // eslint-disable-next-line no-await-in-loop
      await build(options);
      result.builds.push(name);
    } catch (error) {
      result.errors.push({ name, error: JSON.stringify(error) });
    }
  }

  return result;
};

buildPackages().then((result) => {
  console.log('Built:', result);
});
