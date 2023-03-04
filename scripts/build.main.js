import process from 'node:process';
import { resolve } from 'node:path';

import { defineConfig, build } from 'tsup';

import { defaultConfig } from './utils.js';

const root = process.cwd();

// "build:dev": "SET NODE_ENV=dev & node ./tsup.build.js",
// "build": "node ./tsup.build.js",
// "publish": "node ./publish.pkgs.js"

const getPackageOptions = () => {
  const entry = [`./src/index.ts`];

  const minify = process.env.NODE_ENV
    ? !process.env.NODE_ENV.startsWith('dev')
    : true;

  const tsconfig = resolve(root, 'tsconfig.json');

  return defineConfig({
    ...defaultConfig,
    entry,
    minify,
    tsconfig,
  });
};

try {
  const options = getPackageOptions();
  await build(options);

  console.log('Built main');
} catch (error) {
  console.log(JSON.stringify(error));
}
