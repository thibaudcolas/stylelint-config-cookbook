# Contribution Guidelines

We welcome all support, whether on bug reports, feature requests, code, design, reviews, tests, documentation, and more.

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