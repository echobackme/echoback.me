import js from "@eslint/js"
import { defineConfig } from "eslint/config"
import prettier from "eslint-config-prettier"
import reactHooks from "eslint-plugin-react-hooks"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import globals from "globals"
import tseslint from "typescript-eslint"

export default defineConfig([
    { ignores: [".build", "node_modules"] },

    js.configs.recommended,
    ...tseslint.configs.recommended,

    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.es2021,
            },
            parser: tseslint.parser,
            parserOptions: {
                project: ["./tsconfig.app.json", "./tsconfig.node.json"],
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            "react-hooks": reactHooks as any,
            "simple-import-sort": simpleImportSort,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
            "@typescript-eslint/no-unused-vars": ["warn"],
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "no-undef": "off",
        },
    },

    prettier,
])
