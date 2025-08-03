import globals from "globals";
import pluginJs from "@eslint/js";
import importPlugin from "eslint-plugin-import";
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: ["block-like", "multiline-expression", "multiline-const", "multiline-let"],
          next: "*",
        },
        {
          blankLine: "always",
          prev: "*",
          next: ["block-like", "multiline-expression", "multiline-const", "multiline-let", "return"],
        },
        { blankLine: "always", prev: ["const", "let"], next: ["expression"] },
        { blankLine: "always", prev: ["expression"], next: ["const", "let"] },
      ],
    },
  },
];
