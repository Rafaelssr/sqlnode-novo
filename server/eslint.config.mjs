import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  rules, {
    "class-methods-use-this": "off"
  },
  { languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];