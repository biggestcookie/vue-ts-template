# Vue TypeScript Template

A Vue.js app template, using:

- [TypeScript](https://www.typescriptlang.org/)
- [Vue.js](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/)

...and some more preferred choices, such as:

- [VueUse](https://vueuse.org/)
- [Sass](https://sass-lang.com/)
- [Vue setup syntax](https://vuejs.org/api/sfc-script-setup.html)

This project references some TypeScript from a monorepo template, [vue-express-template](https://github.com/biggestcookie/vue-express-template). To remove these dependencies, search and remove all references to the `shared` folder. Additionally, this template repo does not contain linting configuration; that can be found in and copied from the monorepo template.

## Setup

1. Run `npm install` in the root folder.
2. Run the dev server:
   - If you are using Visual Studio Code, press `Ctrl/Cmd + Shift + B` to run the default dev task.
   - If you are not using Visual Studio Code or wish to run this manually, run `npm run dev`.
3. Build the project:
   - Run `npm run build` in the root folder.
   - When deploying this app, point your deployment to the `dist` folder.
