module.exports = {
  extends: ["airbnb", "eslint:recommended", "prettier/react"],
  plugins: ["react-hooks", "jsx", "prettier", "react"],
  rules: {
    quotes: "off",
    "import/no-unresolved": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "react/button-has-type": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-underscore-dangle": "off",
    "no-shadow": "off",
    "object-curly-newline": "off",
  },
};
