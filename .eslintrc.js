module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:inferno/recommended",
    "plugin:jasmine/recommended"
  ],
  plugins: ["jasmine"],
  parser: "babel-eslint",
  rules: {
    indent: ["error", 4],
    quotes: [2, "single", "avoid-escape"],
    "import/no-extreaneous-dependencies": 0
  },
  globals: {
    document: true,
    beforeEach: true,
    describe: true,
    expect: true,
    it: true
  }
};
