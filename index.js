module.exports = {
  extends: ["eslint:recommended", "airbnb", "prettier", "prettier/react"],
  plugins: ["react-hooks", "jsx", "prettier", "react", "unicorn"],
  env: {
    browser: true,
    node: true,
    jest: true,
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
    "jsx-a11y/label-has-associated-control": [ 2, {
      "required": {
          "every": [ "id" ]
      }
    }]
  },
};
