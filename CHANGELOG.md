# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html), enforced with [semantic-release](https://github.com/semantic-release/semantic-release).

# [1.1.0](https://github.com/thibaudcolas/stylelint-config-cookbook/compare/v1.0.0...v1.1.0) (2018-09-23)

### Features

- **config:** remove Prettier enforcement with stylelint-prettier ([#14](https://github.com/thibaudcolas/stylelint-config-cookbook/issues/14)) ([12d1db1](https://github.com/thibaudcolas/stylelint-config-cookbook/commit/12d1db1))

# [1.0.0](https://github.com/thibaudcolas/stylelint-config-cookbook/compare/v0.2.0...v1.0.0) (2018-09-23)

### Features

- **config:** enforce scss/at-mixin-named-arguments: always ([#11](https://github.com/thibaudcolas/stylelint-config-cookbook/issues/11)) ([aeade5b](https://github.com/thibaudcolas/stylelint-config-cookbook/commit/aeade5b))

### BREAKING CHANGES

- **config:** now enforces mixins always using named arguments via [`scss/at-mixin-named-arguments`](https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/at-mixin-named-arguments).
  This is similar to [`scss/at-function-named-arguments`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-named-arguments/).

Error:

```scss
.foo {
  @include animation(250ms, 100ms);
}
```

Success:

```scss
.foo {
  @include animation($duration: 250ms, $delay: 100ms);
}
```

# [0.2.0](https://github.com/thibaudcolas/stylelint-config-cookbook/compare/v0.1.2...v0.2.0) (2018-09-16)

### Bug Fixes

- **release:** attempt to fix GIT_AUTHOR_NAME for releases ([7916c2e](https://github.com/thibaudcolas/stylelint-config-cookbook/commit/7916c2e))

### Features

- **dependencies:** update to latest stylelint-prettier (no changes) ([56a7964](https://github.com/thibaudcolas/stylelint-config-cookbook/commit/56a7964))

## [0.1.2](https://github.com/thibaudcolas/stylelint-config-cookbook/compare/v0.1.1...v0.1.2) (2018-09-16)

### Bug Fixes

- **release:** fix wrong package metadata (homepage) ([#9](https://github.com/thibaudcolas/stylelint-config-cookbook/issues/9)) ([619a28e](https://github.com/thibaudcolas/stylelint-config-cookbook/commit/619a28e))

## [0.1.1](https://github.com/thibaudcolas/stylelint-config-cookbook/compare/v0.1.0...v0.1.1) (2018-09-16)

### Bug Fixes

- **readme:** use correct syntax highlight for copy-pasteable config ([#8](https://github.com/thibaudcolas/stylelint-config-cookbook/issues/8)) ([c6a9a81](https://github.com/thibaudcolas/stylelint-config-cookbook/commit/c6a9a81))

# [0.1.0](https://github.com/thibaudcolas/stylelint-config-cookbook/tree/v0.1.0) (2018-09-16)

First release
