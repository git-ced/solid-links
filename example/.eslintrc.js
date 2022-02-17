module.exports = {
  "root": true,
  "parserOptions": {
    "project": "./tsconfig.eslint.json",
  },
  "extends": [
    "lxsmnsyc/typescript/react"
  ],
  "rules": {
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.test.tsx",
          "vite.config.ts"
        ]
      }
    ],
    "camelcase": "off",
    "react/button-has-type": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react-hooks/rules-of-hooks": "off",
    "react/jsx-no-undef": "off",
    "react/prop-types": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/no-unknown-property": "off",
    "jsx-a11y/label-has-associated-control": "off"
  }
};
