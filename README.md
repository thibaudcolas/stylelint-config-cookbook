# @thibaudcolas/stylelint-config-cookbook [![npm](https://img.shields.io/npm/v/stylelint-config-cookbook.svg?style=flat-square)](https://www.npmjs.com/package/@thibaudcolas/stylelint-config-cookbook) [![Build Status](https://travis-ci.com/thibaudcolas/stylelint-config-cookbook.svg?branch=master)](https://travis-ci.com/thibaudcolas/stylelint-config-cookbook)

> Shareable stylelint config for CSS and SCSS, with a strict baseline

## Usage

Install the config and its dependencies:

```sh
npm install --save-exact --save-dev stylelint @thibaudcolas/stylelint-config-cookbook
```

Then configure stylelint to use this config. For example, in your package.json, this would be:

```json
"stylelint": {
  "extends": "@thibaudcolas/stylelint-config-cookbook"
},
```

## Development

### Install

> Clone the project on your computer, and install [Node](https://nodejs.org). This project also uses [nvm](https://github.com/creationix/nvm).

```sh
nvm install
# Then, install all project dependencies.
npm install
# Install the git hooks.
./.githooks/deploy.sh
```

### Working on the project

> Everything mentioned in the installation process should already be done.

```sh
# Make sure you use the right node version.
nvm use
# View available commands with:
npm run
# Most used commands:
npm run test
npm run lint
```

### Releases

Use `npm run release`, which uses [standard-version](https://github.com/conventional-changelog/standard-version) to generate the CHANGELOG and decide on the version bump based on the commits since the last release.
