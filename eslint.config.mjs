import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

export default tseslint.config({
    files: [
        "src/**/*.ts",
    ],
    plugins: {
        "@tslint": tseslint.plugin,
        "@stylistic": stylistic,
        "@unicorn": eslintPluginUnicorn
    },
    languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
            projectService: true,
            tsconfigRootDir: import.meta.dirname
        }
    },
    rules: {
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-var": "error",

        "prefer-const": "warn",
        "no-const-assign": "error",

        "no-self-assign": "error",
        "no-self-compare": "error",

        "no-this-before-super": "error",

        "no-unmodified-loop-condition": "error",
        "no-unreachable": "error",
        "no-unreachable-loop": "error",
        
        "@unicorn/no-null": ["error", {"checkStrictEquality": true}],
        
        "camelcase": "error",
        "@tslint/no-unused-vars": "warn",
        "@stylistic/semi": "error",
        "@stylistic/semi-style": ["error","last"],
        "@stylistic/no-extra-semi": "error"
    }
});