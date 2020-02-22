# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html), enforced with [semantic-release](https://github.com/semantic-release/semantic-release).

# [4.0.0](https://github.com/thibaudcolas/stylelint-config-cookbook/compare/v3.0.1...v4.0.0) (2020-02-22)

### Features

- **config:** enable new rules from stylelint-scss ([09e1c1d](https://github.com/thibaudcolas/stylelint-config-cookbook/commit/09e1c1dda00d977a048633eaacd876d76358ab7e))
- **deps:** update all extension dependencies ([dbade38](https://github.com/thibaudcolas/stylelint-config-cookbook/commit/dbade3835f6280062600a56ff483a8212430a3a4))
- **deps:** upgrade to stylelint v12 ([3894179](https://github.com/thibaudcolas/stylelint-config-cookbook/commit/3894179241129a9c61bfa04b73d348fb81141e72))

### BREAKING CHANGES

- **config:** this enables 9 new rules from stylelint-scss.

* `scss/no-duplicate-mixins`
* `scss/map-keys-quotes`
* `scss/function-unquote-no-unquoted-strings-inside`
* `scss/function-quote-no-quoted-strings-inside`
* `scss/dimension-no-non-numeric-values`
* `scss/comment-no-loud`
* `scss/at-import-partial-extension`
* `scss/at-if-no-null`
* `scss/at-each-key-value-single-line`

- **deps:** the config now depends on stylelint v12.

# [4.0.0](https://github.com/thibaudcolas/stylelint-config-cookbook/compare/v3.0.1...v4.0.0) (2020-02-16)

### Features

- **config:** enable new rules from stylelint-scss ([09e1c1d](https://github.com/thibaudcolas/stylelint-config-cookbook/commit/09e1c1dda00d977a048633eaacd876d76358ab7e))
- **deps:** update all extension dependencies ([dbade38](https://github.com/thibaudcolas/stylelint-config-cookbook/commit/dbade3835f6280062600a56ff483a8212430a3a4))
- **deps:** upgrade to stylelint v12 ([3894179](https://github.com/thibaudcolas/stylelint-config-cookbook/commit/3894179241129a9c61bfa04b73d348fb81141e72))

### BREAKING CHANGES

- **config:** this enables 9 new rules from stylelint-scss.

* `scss/no-duplicate-mixins`
* `scss/map-keys-quotes`
* `scss/function-unquote-no-unquoted-strings-inside`
* `scss/function-quote-no-quoted-strings-inside`
* `scss/dimension-no-non-numeric-values`
* `scss/comment-no-loud`
* `scss/at-import-partial-extension`
* `scss/at-if-no-null`
* `scss/at-each-key-value-single-line`

- **deps:** the config now depends on stylelint v12.

# [4.0.0](https://github.com/thibaudcolas/stylelint-config-cookbook/compare/v3.0.1...v4.0.0) (2020-02-16)

### Features

- **config:** enable new rules from stylelint-scss ([09e1c1d](https://github.com/thibaudcolas/stylelint-config-cookbook/commit/09e1c1dda00d977a048633eaacd876d76358ab7e))
- **deps:** update all extension dependencies ([dbade38](https://github.com/thibaudcolas/stylelint-config-cookbook/commit/dbade3835f6280062600a56ff483a8212430a3a4))
- **deps:** upgrade to stylelint v12 ([3894179](https://github.com/thibaudcolas/stylelint-config-cookbook/commit/3894179241129a9c61bfa04b73d348fb81141e72))

### BREAKING CHANGES

- **config:** this enables 9 new rules from stylelint-scss.

* `scss/no-duplicate-mixins`
* `scss/map-keys-quotes`
* `scss/function-unquote-no-unquoted-strings-inside`
* `scss/function-quote-no-quoted-strings-inside`
* `scss/dimension-no-non-numeric-values`
* `scss/comment-no-loud`
* `scss/at-import-partial-extension`
* `scss/at-if-no-null`
* `scss/at-each-key-value-single-line`

- **deps:** the config now depends on stylelint v12.

## [3.0.1](https://github.com/thibaudcolas/stylelint-config-cookbook/compare/v3.0.0...v3.0.1) (2019-08-29)

### Bug Fixes

- **config:** whitelist the `initial` keyword instead of variables ([7260318](https://github.com/thibaudcolas/stylelint-config-cookbook/commit/7260318))

# [3.0.0](https://github.com/thibaudcolas/stylelint-config-cookbook/compare/v2.0.1...v3.0.0) (2019-04-20)

### Features

- **config:** add a11y-related rules. Fix [#18](https://github.com/thibaudcolas/stylelint-config-cookbook/issues/18) ([0fa9c37](https://github.com/thibaudcolas/stylelint-config-cookbook/commit/0fa9c37))
- **config:** lint declaration ordering w/ stylelint-order. Fix [#1](https://github.com/thibaudcolas/stylelint-config-cookbook/issues/1) ([2fa4cf7](https://github.com/thibaudcolas/stylelint-config-cookbook/commit/2fa4cf7))
- **config:** update to latest stylelint & plugins ([f28c9eb](https://github.com/thibaudcolas/stylelint-config-cookbook/commit/f28c9eb))

### BREAKING CHANGES

- **config:** adds 2 new rules related to declarations ordering.
- **config:** this adds 6 new rules related to accessibility.
- **config:** enforces 1 new rule, and changes the behavior (bugfixes) of existing rules via dependency updates.

## [2.0.1](https://github.com/thibaudcolas/stylelint-config-cookbook/compare/v2.0.0...v2.0.1) (2018-09-24)

### Bug Fixes

- **config:** fix value for scss/media-feature-value-dollar-variable ([5fe20ef](https://github.com/thibaudcolas/stylelint-config-cookbook/commit/5fe20ef))
- **config:** upgrade stylelint-scss to fix trailing commas parsing ([c06a70c](https://github.com/thibaudcolas/stylelint-config-cookbook/commit/c06a70c))

# [2.0.0](https://github.com/thibaudcolas/stylelint-config-cookbook/compare/v1.1.0...v2.0.0) (2018-09-23)

### Features

- **config:** enforce 4 additional SCSS rules ([#15](https://github.com/thibaudcolas/stylelint-config-cookbook/issues/15)) ([a715b31](https://github.com/thibaudcolas/stylelint-config-cookbook/commit/a715b31))

### BREAKING CHANGES

- **config:** enforces 4 additional SCSS rules,

* [`scss/dollar-variable-no-missing-interpolation`](https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/dollar-variable-no-missing-interpolation) – prevents this type of error in stylesheets.
* [`scss/at-mixin-argumentless-call-parentheses`](https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/at-mixin-argumentless-call-parentheses) – makes @include statements more consistent between argumentless and with-arguments.
* [`scss/media-feature-value-dollar-variable`](https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/media-feature-value-dollar-variable) – makes it harder to declare @media rules with arbitrary values.
* [`scss/no-duplicate-dollar-variables`](https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/no-duplicate-dollar-variables) – code smell check.

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
