module.exports = {
  extends: ["./node_modules/@smccarrick/sm-config/.eslintrc.js"],
  ignorePatterns: [
    "node_modules",
    ".vscode",
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json", "./tsconfig.eslint.json"],
  },
};