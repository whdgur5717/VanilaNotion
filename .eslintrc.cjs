module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["prettier", "eslint:recommended"],
  rules: {
    "import/prefer-default-export": "off",
    "import/extensions": ["off"],
    "no-param-reassign": ["error", { props: false }],
    "no-unused-vars": ["error"]
  },
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs,}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  }
}
