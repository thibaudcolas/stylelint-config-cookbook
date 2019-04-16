# @thibaudcolas/stylelint-config-cookbook [![npm](https://img.shields.io/npm/v/@thibaudcolas/stylelint-config-cookbook.svg)](https://www.npmjs.com/package/@thibaudcolas/stylelint-config-cookbook) [![Build Status](https://travis-ci.com/thibaudcolas/stylelint-config-cookbook.svg?branch=master)](https://travis-ci.com/thibaudcolas/stylelint-config-cookbook)

> Shareable stylelint config for CSS and SCSS, with a strict baseline

## Usage

Install stylelint and the config:

```sh
npm install --save-dev stylelint @thibaudcolas/stylelint-config-cookbook
```

Then [configure stylelint to use this config](https://stylelint.io/user-guide/configuration/#extends). As a `stylelint.config.js` in the root of your project:

```js
module.exports = {
  // https://github.com/thibaudcolas/stylelint-config-cookbook
  extends: "@thibaudcolas/stylelint-config-cookbook",
};
```

### Tips

- Use Stylelint’s [`--report-needless-disables`](https://stylelint.io/user-guide/node-api/#reportneedlessdisables) flag to ensure you do not use more `stylelint-disable` comments than needed.

### Related tools

To get the most out of this config, it is assumed that projects have the following tools set up:

- [Prettier](https://prettier.io/) for automated formatting of stylesheets.
- [Browserslist](https://github.com/browserslist/browserslist) for the definition of target browsers (along with [autoprefixer](https://github.com/postcss/autoprefixer) and [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)).

## Conventions

The overarching principle behind this config is to make it simpler to maintain stylesheets in large-scale projects. This means:

- Support for large-scale CSS architectures like [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/).
- Mandatory reusable values (via variables and functions) for properties that impact the overall consistency of the UI, e.g. colors and attributes of fonts.
- A low maximum specificity, to prevent abuse of the CSS cascade (or altogether discourage usage of styles overrides beyond single components).
- Blanket ban of CSS/SCSS features that make it harder to maintain stylesheets – id selectors (never), element selectors (max 1), nested properties, etc).

<!-- Generated with: npm run build:docs -->

## Rules

### Cookbook config

- [`color-named`](https://stylelint.io/user-guide/rules/color-named/): `never`
- [`declaration-block-no-shorthand-property-overrides`](https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides/)
- [`shorthand-property-no-redundant-values`](https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/)
- [`declaration-no-important`](https://stylelint.io/user-guide/rules/declaration-no-important/)
- [`selector-max-id`](https://stylelint.io/user-guide/rules/selector-max-id/): `0`
- [`selector-max-type`](https://stylelint.io/user-guide/rules/selector-max-type/): `1`
- [`selector-no-qualifying-type`](https://stylelint.io/user-guide/rules/selector-no-qualifying-type/)
- [`max-nesting-depth`](https://stylelint.io/user-guide/rules/max-nesting-depth/): `3`
- [`selector-max-specificity`](https://stylelint.io/user-guide/rules/selector-max-specificity/): `0,3,0`
- [`value-no-vendor-prefix`](https://stylelint.io/user-guide/rules/value-no-vendor-prefix/)
- [`property-no-vendor-prefix`](https://stylelint.io/user-guide/rules/property-no-vendor-prefix/)
- [`selector-no-vendor-prefix`](https://stylelint.io/user-guide/rules/selector-no-vendor-prefix/)
- [`media-feature-name-no-vendor-prefix`](https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix/)
- [`at-rule-no-vendor-prefix`](https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix/)
- [`scss/at-rule-no-unknown`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/declaration-nested-properties`](https://github.com/kristerkari/stylelint-scss#readme): `never`
- [`scss/selector-no-redundant-nesting-selector`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/percent-placeholder-pattern`](https://github.com/kristerkari/stylelint-scss#readme): `^do-not-use-placeholders$`
- [`scss/at-function-named-arguments`](https://github.com/kristerkari/stylelint-scss#readme): `always`
- [`scss/at-mixin-named-arguments`](https://github.com/kristerkari/stylelint-scss#readme): `always`
- [`scss/dollar-variable-no-missing-interpolation`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/at-mixin-argumentless-call-parentheses`](https://github.com/kristerkari/stylelint-scss#readme): `always`
- [`scss/media-feature-value-dollar-variable`](https://github.com/kristerkari/stylelint-scss#readme): `always`
- [`scss/no-duplicate-dollar-variables`](https://github.com/kristerkari/stylelint-scss#readme)
- [`plugin/declaration-block-no-ignored-properties`](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties#readme)
- [`scale-unlimited/declaration-strict-value`](https://github.com/AndyOGo/stylelint-declaration-strict-value#readme): `/color/, z-index, font-size, font-family, ignoreKeywords: currentColor, inherit, transparent`
- [`plugin/no-unsupported-browser-features`](https://github.com/ismay/stylelint-no-unsupported-browser-features#readme): `true, ignore: user-select-none, css3-cursors, viewport-units, outline, css-appearance`

### Rules of `stylelint-config-standard`

- [`at-rule-name-space-after`](https://stylelint.io/user-guide/rules/at-rule-name-space-after/): `always`
- [`color-hex-length`](https://stylelint.io/user-guide/rules/color-hex-length/): `short`
- [`comment-empty-line-before`](https://stylelint.io/user-guide/rules/comment-empty-line-before/): `always, except: first-nested, ignore: stylelint-commands`
- [`comment-whitespace-inside`](https://stylelint.io/user-guide/rules/comment-whitespace-inside/): `always`
- [`custom-property-empty-line-before`](https://stylelint.io/user-guide/rules/custom-property-empty-line-before/): `always, except: after-custom-property, first-nested, ignore: after-comment, inside-single-line-block`
- [`declaration-bang-space-after`](https://stylelint.io/user-guide/rules/declaration-bang-space-after/): `never`
- [`declaration-bang-space-before`](https://stylelint.io/user-guide/rules/declaration-bang-space-before/): `always`
- [`declaration-block-single-line-max-declarations`](https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations/): `1`
- [`declaration-empty-line-before`](https://stylelint.io/user-guide/rules/declaration-empty-line-before/): `always, except: after-declaration, first-nested, ignore: after-comment, inside-single-line-block`
- [`function-name-case`](https://stylelint.io/user-guide/rules/function-name-case/): `lower`
- [`function-whitespace-after`](https://stylelint.io/user-guide/rules/function-whitespace-after/): `always`
- [`length-zero-no-unit`](https://stylelint.io/user-guide/rules/length-zero-no-unit/)
- [`media-feature-colon-space-after`](https://stylelint.io/user-guide/rules/media-feature-colon-space-after/): `always`
- [`media-feature-colon-space-before`](https://stylelint.io/user-guide/rules/media-feature-colon-space-before/): `never`
- [`media-feature-parentheses-space-inside`](https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside/): `never`
- [`media-feature-range-operator-space-after`](https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after/): `always`
- [`media-feature-range-operator-space-before`](https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before/): `always`
- [`no-missing-end-of-source-newline`](https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline/)
- [`selector-attribute-brackets-space-inside`](https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside/): `never`
- [`selector-attribute-operator-space-after`](https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after/): `never`
- [`selector-attribute-operator-space-before`](https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before/): `never`
- [`selector-pseudo-class-parentheses-space-inside`](https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside/): `never`
- [`selector-pseudo-element-colon-notation`](https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/): `double`
- [`selector-type-case`](https://stylelint.io/user-guide/rules/selector-type-case/): `lower`
- [`block-no-empty`](https://stylelint.io/user-guide/rules/block-no-empty/)
- [`color-no-invalid-hex`](https://stylelint.io/user-guide/rules/color-no-invalid-hex/)
- [`comment-no-empty`](https://stylelint.io/user-guide/rules/comment-no-empty/)
- [`declaration-block-no-duplicate-properties`](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties/): `true, ignore: consecutive-duplicates-with-different-values`
- [`font-family-no-duplicate-names`](https://stylelint.io/user-guide/rules/font-family-no-duplicate-names/)
- [`font-family-no-missing-generic-family-keyword`](https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword/)
- [`function-calc-no-unspaced-operator`](https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator/)
- [`function-linear-gradient-no-nonstandard-direction`](https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/)
- [`keyframe-declaration-no-important`](https://stylelint.io/user-guide/rules/keyframe-declaration-no-important/)
- [`media-feature-name-no-unknown`](https://stylelint.io/user-guide/rules/media-feature-name-no-unknown/)
- [`no-descending-specificity`](https://stylelint.io/user-guide/rules/no-descending-specificity/)
- [`no-duplicate-at-import-rules`](https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules/)
- [`no-duplicate-selectors`](https://stylelint.io/user-guide/rules/no-duplicate-selectors/)
- [`no-empty-source`](https://stylelint.io/user-guide/rules/no-empty-source/)
- [`no-invalid-double-slash-comments`](https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments/)
- [`property-no-unknown`](https://stylelint.io/user-guide/rules/property-no-unknown/)
- [`selector-pseudo-class-no-unknown`](https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown/)
- [`selector-pseudo-element-no-unknown`](https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/)
- [`selector-type-no-unknown`](https://stylelint.io/user-guide/rules/selector-type-no-unknown/)
- [`string-no-newline`](https://stylelint.io/user-guide/rules/string-no-newline/)
- [`unit-no-unknown`](https://stylelint.io/user-guide/rules/unit-no-unknown/)
- [`selector-attribute-quotes`](https://stylelint.io/user-guide/rules/selector-attribute-quotes/): `always`
- [`at-rule-semicolon-space-before`](https://stylelint.io/user-guide/rules/at-rule-semicolon-space-before/): `never`

### Disabled rules

<details>

- [`at-rule-no-unknown`](https://stylelint.io/user-guide/rules/at-rule-no-unknown/)
- [`at-rule-empty-line-before`](https://stylelint.io/user-guide/rules/at-rule-empty-line-before/)
- [`at-rule-name-case`](https://stylelint.io/user-guide/rules/at-rule-name-case/)
- [`at-rule-semicolon-newline-after`](https://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after/)
- [`block-closing-brace-empty-line-before`](https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before/)
- [`block-closing-brace-newline-after`](https://stylelint.io/user-guide/rules/block-closing-brace-newline-after/)
- [`block-closing-brace-newline-before`](https://stylelint.io/user-guide/rules/block-closing-brace-newline-before/)
- [`block-closing-brace-space-before`](https://stylelint.io/user-guide/rules/block-closing-brace-space-before/)
- [`block-opening-brace-newline-after`](https://stylelint.io/user-guide/rules/block-opening-brace-newline-after/)
- [`block-opening-brace-space-after`](https://stylelint.io/user-guide/rules/block-opening-brace-space-after/)
- [`block-opening-brace-space-before`](https://stylelint.io/user-guide/rules/block-opening-brace-space-before/)
- [`color-hex-case`](https://stylelint.io/user-guide/rules/color-hex-case/)
- [`declaration-block-semicolon-newline-after`](https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after/)
- [`declaration-block-semicolon-space-after`](https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-after/)
- [`declaration-block-semicolon-space-before`](https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before/)
- [`declaration-block-trailing-semicolon`](https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon/)
- [`declaration-colon-newline-after`](https://stylelint.io/user-guide/rules/declaration-colon-newline-after/)
- [`declaration-colon-space-after`](https://stylelint.io/user-guide/rules/declaration-colon-space-after/)
- [`declaration-colon-space-before`](https://stylelint.io/user-guide/rules/declaration-colon-space-before/)
- [`function-comma-newline-after`](https://stylelint.io/user-guide/rules/function-comma-newline-after/)
- [`function-comma-space-after`](https://stylelint.io/user-guide/rules/function-comma-space-after/)
- [`function-comma-space-before`](https://stylelint.io/user-guide/rules/function-comma-space-before/)
- [`function-max-empty-lines`](https://stylelint.io/user-guide/rules/function-max-empty-lines/)
- [`function-parentheses-newline-inside`](https://stylelint.io/user-guide/rules/function-parentheses-newline-inside/)
- [`function-parentheses-space-inside`](https://stylelint.io/user-guide/rules/function-parentheses-space-inside/)
- [`indentation`](https://stylelint.io/user-guide/rules/indentation/)
- [`max-empty-lines`](https://stylelint.io/user-guide/rules/max-empty-lines/)
- [`media-feature-name-case`](https://stylelint.io/user-guide/rules/media-feature-name-case/)
- [`media-query-list-comma-newline-after`](https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after/)
- [`media-query-list-comma-space-after`](https://stylelint.io/user-guide/rules/media-query-list-comma-space-after/)
- [`media-query-list-comma-space-before`](https://stylelint.io/user-guide/rules/media-query-list-comma-space-before/)
- [`no-eol-whitespace`](https://stylelint.io/user-guide/rules/no-eol-whitespace/)
- [`number-leading-zero`](https://stylelint.io/user-guide/rules/number-leading-zero/)
- [`number-no-trailing-zeros`](https://stylelint.io/user-guide/rules/number-no-trailing-zeros/)
- [`property-case`](https://stylelint.io/user-guide/rules/property-case/)
- [`rule-empty-line-before`](https://stylelint.io/user-guide/rules/rule-empty-line-before/)
- [`selector-combinator-space-after`](https://stylelint.io/user-guide/rules/selector-combinator-space-after/)
- [`selector-combinator-space-before`](https://stylelint.io/user-guide/rules/selector-combinator-space-before/)
- [`selector-descendant-combinator-no-non-space`](https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space/)
- [`selector-list-comma-newline-after`](https://stylelint.io/user-guide/rules/selector-list-comma-newline-after/)
- [`selector-list-comma-space-before`](https://stylelint.io/user-guide/rules/selector-list-comma-space-before/)
- [`selector-max-empty-lines`](https://stylelint.io/user-guide/rules/selector-max-empty-lines/)
- [`selector-pseudo-class-case`](https://stylelint.io/user-guide/rules/selector-pseudo-class-case/)
- [`selector-pseudo-element-case`](https://stylelint.io/user-guide/rules/selector-pseudo-element-case/)
- [`unit-case`](https://stylelint.io/user-guide/rules/unit-case/)
- [`value-list-comma-newline-after`](https://stylelint.io/user-guide/rules/value-list-comma-newline-after/)
- [`value-list-comma-space-after`](https://stylelint.io/user-guide/rules/value-list-comma-space-after/)
- [`value-list-comma-space-before`](https://stylelint.io/user-guide/rules/value-list-comma-space-before/)
- [`value-list-max-empty-lines`](https://stylelint.io/user-guide/rules/value-list-max-empty-lines/)
- [`no-extra-semicolons`](https://stylelint.io/user-guide/rules/no-extra-semicolons/)
- [`max-line-length`](https://stylelint.io/user-guide/rules/max-line-length/)
- [`function-comma-newline-before`](https://stylelint.io/user-guide/rules/function-comma-newline-before/)
- [`value-list-comma-newline-before`](https://stylelint.io/user-guide/rules/value-list-comma-newline-before/)
- [`declaration-block-semicolon-newline-before`](https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before/)
- [`declaration-block-no-redundant-longhand-properties`](https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties/)
- [`block-closing-brace-space-after`](https://stylelint.io/user-guide/rules/block-closing-brace-space-after/)
- [`block-opening-brace-newline-before`](https://stylelint.io/user-guide/rules/block-opening-brace-newline-before/)
- [`selector-list-comma-newline-before`](https://stylelint.io/user-guide/rules/selector-list-comma-newline-before/)
- [`selector-list-comma-space-after`](https://stylelint.io/user-guide/rules/selector-list-comma-space-after/)
- [`media-query-list-comma-newline-before`](https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before/)
- [`at-rule-name-newline-after`](https://stylelint.io/user-guide/rules/at-rule-name-newline-after/)
- [`string-quotes`](https://stylelint.io/user-guide/rules/string-quotes/)

</details>
