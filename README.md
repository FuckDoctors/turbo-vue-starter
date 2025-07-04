# Turborepo Vue Starter

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `api`: an [Express](https://expressjs.com/) server
- `@zhaobc/eslint-config`: ESLint configurations used throughout the monorepo
- `@zhaobc/logger`: isomorphic logger (a small wrapper around console.log)
- `@zhaobc/tsconfig`: tsconfig.json's used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Stylelint](https://stylelint.io/) for CSS lint
- [commitlint](https://commitlint.js.org/) for commit convention
- [lint-staged](https://github.com/lint-staged/lint-staged) for running tasks before committing

### Tests

This Turborepo uses [vitest](https://vitest.dev) for test.

### others

#### commitizen

```shell
pnpx commitizen init cz-conventional-changelog --pnpm --save-dev --save-exact
```
