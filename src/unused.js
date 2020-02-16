const config = require("./config");

/**
 * Use this file to list all available rules that should *not*
 */

const tooOpinionated = [
  "a11y/line-height-is-vertical-rhythmed",
  "a11y/media-prefers-color-scheme",
  "a11y/no-display-none",
  "a11y/no-outline-none",
  "a11y/no-spread-text",
  "a11y/selector-pseudo-class-focus",
  "comment-word-blacklist",
  "custom-media-pattern",
  "custom-property-pattern",
  "declaration-block-no-redundant-longhand-properties",
  "declaration-property-unit-blacklist",
  "declaration-property-unit-whitelist",
  "declaration-property-value-blacklist",
  "declaration-property-value-whitelist",
  "font-family-name-quotes",
  "font-weight-notation",
  "function-blacklist",
  "function-url-no-scheme-relative",
  "function-url-quotes",
  "function-url-scheme-blacklist",
  "function-url-scheme-whitelist",
  "function-whitelist",
  "keyframes-name-pattern",
  "linebreaks",
  "media-feature-name-blacklist",
  "media-feature-name-value-whitelist",
  "media-feature-name-whitelist",
  "no-empty-first-line",
  "no-unknown-animations",
  "number-max-precision",
  "property-blacklist",
  "property-whitelist",
  "scss/partial-no-import",
  "scss/selector-nest-combinators",
  "selector-attribute-operator-blacklist",
  "selector-attribute-operator-whitelist",
  "selector-class-pattern",
  "selector-combinator-blacklist",
  "selector-combinator-whitelist",
  "selector-max-attribute",
  "selector-max-class",
  "selector-max-combinators",
  "selector-max-compound-selectors",
  "selector-max-pseudo-class",
  "selector-max-universal",
  "selector-nested-pattern",
  "selector-pseudo-class-blacklist",
  "selector-pseudo-class-whitelist",
  "selector-pseudo-element-blacklist",
  "selector-pseudo-element-whitelist",
  "time-min-milliseconds",
  "unit-blacklist",
  "unit-whitelist",
  "value-keyword-case",
  "scss/dollar-variable-pattern",
  "scss/at-function-pattern",
  "scss/at-import-partial-extension-blacklist",
  "scss/at-import-partial-extension-whitelist",
  "scss/dollar-variable-default",
  "scss/no-dollar-variables",
  "scss/selector-no-union-class-name",
  "scss/function-color-relative",
  "scss/at-rule-conditional-no-parentheses",
];

const overridenByOtherRule = [
  "at-rule-blacklist",
  "at-rule-property-requirelist",
  "at-rule-whitelist",
  "color-no-hex",
  "selector-id-pattern",
  "order/properties-alphabetical-order",
];

const formattingByPrettier = [
  "scss/at-else-closing-brace-newline-after",
  "scss/at-else-closing-brace-space-after",
  "scss/at-else-empty-line-before",
  "scss/at-else-if-parentheses-space-before",
  "scss/at-extend-no-missing-placeholder",
  "scss/at-function-parentheses-space-before",
  "scss/at-if-closing-brace-newline-after",
  "scss/at-if-closing-brace-space-after",
  "scss/at-import-no-partial-leading-underscore",
  "scss/at-mixin-parentheses-space-before",
  "scss/at-mixin-pattern",
  "scss/declaration-nested-properties-no-divided-groups",
  "scss/dollar-variable-colon-newline-after",
  "scss/dollar-variable-colon-space-after",
  "scss/dollar-variable-colon-space-before",
  "scss/dollar-variable-empty-line-before",
  "scss/double-slash-comment-empty-line-before",
  "scss/double-slash-comment-inline",
  "scss/double-slash-comment-whitespace-inside",
  "scss/operator-no-newline-after",
  "scss/operator-no-newline-before",
  "scss/operator-no-unspaced",
];

const unusedRules = [
  ...tooOpinionated,
  ...overridenByOtherRule,
  ...formattingByPrettier,
].reduce((rules, r) => {
  rules[r] = true;
  return rules;
}, {});

module.exports = Object.assign({}, config, {
  rules: Object.assign(unusedRules, config.rules),
});
