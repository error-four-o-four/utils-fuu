# Tasks

## Setup

```cmd
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/error-four-o-four/utils-fuu.git
git push -u origin main
```

- [x] Install and config prettier and eslint
- [x] ~~Library Mode [vite.js](https://vitejs.dev/guide/build.html#library-mode>)~~ Build Library with [tsup](https://www.npmjs.com/package/tsup)
  - [ ] create package.json files
  - [ ] rewrite main package "fuu" and import other packages as dependencies
  - [ ] reconsider npm namespace (@http404/fuu => @fuu)
- [x] Build demos - commonjs, client (parcel)
  - [x] use npm link
  - [ ] use published package
- [ ] Lint Staged - [configuration](https://github.com/okonet/lint-staged#Configuration)
- [ ] Git precommit hook - [reference](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)
- [ ] Implement tests
- [ ] Documentation (maybe Typedoc)

### Eslint and Prettier

<https://www.npmjs.com/package/eslint>\
<https://github.com/prettier/eslint-config-prettier/>\
<https://www.npmjs.com/package/eslint-config-airbnb-typescript>

<https://medium.com/@ErikKyleNielsen/setting-up-eslint-prettier-airbnb-base-and-typescript-27b3f9538f0d>\
<https://www.interactstudio.co.uk/articles/configure-eslint-and-prettier-for-a-new-vite-project/>\
<https://blog.logrocket.com/linting-typescript-eslint-prettier/>

### Library Mode

npm packages have a seperate folder with their own "dist" folder.

`npm run build` script to build each package

<https://www.npmjs.com/package/tsup>\
<https://tsup.egoist.dev/#typescript--javascript>\
<https://paka.dev/npm/tsup@6.6.0/api#8b657050f887daed>
