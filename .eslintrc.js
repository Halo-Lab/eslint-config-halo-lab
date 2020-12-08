module.exports = {
  extends: ["airbnb", "eslint:recommended", "prettier/react"],
  plugins: ["react-hooks", "jsx", "prettier", "react"],
  rules: {
    quotes: "off",
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
    "import/prefer-default-export": "off",
  },
};
