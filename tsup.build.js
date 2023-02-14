// eslint-disable-next-line import/no-extraneous-dependencies
import { build } from 'tsup';
import process from 'node:process';
import { existsSync, readdirSync } from 'node:fs';

// eslint-disable-next-line import/extensions
import config from './tsup.config.js';

const names =
  process.argv.length > 2
    ? [...process.argv.slice(2)]
    : readdirSync('packages');

const getPackageOptions = (directory) => {
  const entry = [`${directory}/index.ts`];
  const outDir = `${directory}/dist`;
  const minify = !process.env.NODE_ENV?.startsWith('dev');

  return {
    ...config,
    entry,
    outDir,
    minify,
  };
};

const buildPackages = async () => {
  const warn = (name) => {
    console.warn(`No such package found: ${name}`);
    return null;
  };

  const directories = names
    .map((name) => {
      const directory = `./packages/${name}`;
      return !existsSync(directory) ? warn() : directory;
    })
    .filter((directory) => directory);

  for (const directoy of directories) {
    const options = getPackageOptions(directoy);
    // eslint-disable-next-line no-await-in-loop
    await build(options);
  }

  return directories;
};

const result = await buildPackages();

console.log('Built:', result);
