module.exports = {
  extends: ["eslint:recommended", "airbnb", "prettier"],
  plugins: ["react-hooks", "jsx", "prettier", "react", "unicorn"],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    quotes: "off",
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
    "import/prefer-default-export": "off",
  },
};
