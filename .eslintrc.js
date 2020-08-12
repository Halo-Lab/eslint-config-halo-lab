module.exports = {
  extends: ["airbnb", "eslint:recommended", "prettier/react"],
  plugins: ["react-hooks"],
  rules: {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": ["off"],
    "import/prefer-default-export": "off",
  },
};
