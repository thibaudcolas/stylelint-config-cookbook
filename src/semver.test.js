const path = require("path");
const stylelint = require("stylelint");

const pkg = require("../package.json");

describe("semver - should those tests break, consider releasing a new major version of the package", () => {
  it("dependencies", () => {
    expect(pkg.dependencies).toMatchInlineSnapshot(`
Object {
  "stylelint-a11y": "^1.1.11",
  "stylelint-config-prettier": "^5.1.0",
  "stylelint-config-standard": "^18.3.0",
  "stylelint-declaration-block-no-ignored-properties": "^2.0.0",
  "stylelint-declaration-strict-value": "^1.1.2",
  "stylelint-no-unsupported-browser-features": "^3.0.2",
  "stylelint-order": "^3.0.0",
  "stylelint-scss": "^3.6.0",
}
`);
  });

  it("peerDependencies", () => {
    expect(pkg.peerDependencies).toMatchInlineSnapshot(`
Object {
  "stylelint": "^10.0.1",
}
`);
  });

  it("config contents", () => {
    const linter = stylelint.createLinter({
      configFile: path.join(__dirname, "config.js"),
    });
    return linter.getConfigForFile().then(result => {
      expect(result.config.rules).toMatchSnapshot();
    });
  });
});
