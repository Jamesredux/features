module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
      "eslint:recommended",
      "prettier"
  ]
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  rules: {},
};
