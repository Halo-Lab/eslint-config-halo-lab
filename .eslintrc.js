module.exports = {
  extends: [
    "airbnb",
    "eslint",
    "plugin:import/errors",
    "plugin:react",
    "plugin:jsx-a11y",
    "plugin:prettier",
    "prettier/react",
  ],
  plugins: ["react-hooks"],
  rules: {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": ["off"],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
};
