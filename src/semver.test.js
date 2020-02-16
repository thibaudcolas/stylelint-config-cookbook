const path = require("path");
const stylelint = require("stylelint");

const pkg = require("../package.json");

describe("semver - should those tests break, consider releasing a new major version of the package", () => {
  it("dependencies", () => {
    expect(Object.keys(pkg.dependencies)).toMatchInlineSnapshot(`
      Array [
        "stylelint-a11y",
        "stylelint-config-prettier",
        "stylelint-config-standard",
        "stylelint-declaration-block-no-ignored-properties",
        "stylelint-declaration-strict-value",
        "stylelint-no-unsupported-browser-features",
        "stylelint-order",
        "stylelint-scss",
      ]
    `);
  });

  it("peerDependencies", () => {
    expect(pkg.peerDependencies).toMatchInlineSnapshot(`
Object {
  "stylelint": "^12.0.1",
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
