"use strict";

// See https://stylelint.io/user-guide/rules/.
module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  plugins: [
    "stylelint-scss",
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-declaration-strict-value",
    "stylelint-no-unsupported-browser-features",
  ],
  rules: {
    "color-named": "never",
    "declaration-block-no-shorthand-property-overrides": true,
    "shorthand-property-no-redundant-values": true,
    "declaration-no-important": true,
    "selector-max-id": 0,
    "selector-max-type": 1,
    "selector-no-qualifying-type": true,
    "max-nesting-depth": 3,
    "selector-max-specificity": "0,3,0",
    "value-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "selector-no-vendor-prefix": true,
    "media-feature-name-no-vendor-prefix": true,
    "at-rule-no-vendor-prefix": true,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "scss/declaration-nested-properties": "never",
    "scss/selector-no-redundant-nesting-selector": true,
    "scss/percent-placeholder-pattern": "^do-not-use-placeholders$",
    "scss/at-function-named-arguments": "always",
    "scss/at-mixin-named-arguments": "always",
    "scss/dollar-variable-no-missing-interpolation": true,
    "scss/at-mixin-argumentless-call-parentheses": "always",
    "scss/media-feature-value-dollar-variable": "always",
    "scss/no-duplicate-dollar-variables": true,
    "plugin/declaration-block-no-ignored-properties": true,
    "scale-unlimited/declaration-strict-value": [
      ["/color/", "z-index", "font-size", "font-family"],
      {
        ignoreKeywords: ["currentColor", "inherit", "transparent"],
      },
    ],
    "plugin/no-unsupported-browser-features": [
      true,
      {
        ignore: [
          "user-select-none",
          "css3-cursors",
          "viewport-units",
          "outline",
          "css-appearance",
        ],
      },
    ],
  },
};
