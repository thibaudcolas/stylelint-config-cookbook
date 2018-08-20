const pkg = require("../package.json");
const config = require("./config");

describe("semver - should those tests break, consider releasing a new major version of the package", () => {
  it("dependencies", () => {
    expect(pkg.dependencies).toMatchSnapshot();
  });

  it("peerDependencies", () => {
    expect(pkg.peerDependencies).toMatchSnapshot();
  });

  it("custom config", () => {
    expect(config).toMatchSnapshot();
  });
});
