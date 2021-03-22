module.exports = {
  extends: ["eslint:recommended", "airbnb", "prettier", "prettier/react"],
  plugins: ["react-hooks", "jsx", "prettier", "react", "unicorn"],
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    quotes: "off",
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/extensions": [
      "off",
      { js: "never", json: "never", scss: "always" },
    ],
    "import/prefer-default-export": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-unresolved": "off",
    "no-plusplus": "off",
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        required: {
          every: ["id"],
        },
      },
    ],
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"], // If needed add here file extensions which eslint will be checking
    },
  ],
};
