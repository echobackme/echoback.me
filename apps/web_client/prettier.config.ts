import { type Config } from "prettier"

const config: Config = {
    semi: false,
    singleQuote: false,
    trailingComma: "all",
    tabWidth: 4,
    useTabs: false,
    printWidth: 120,
    bracketSpacing: true,
    endOfLine: "auto",

    tailwindConfig: "./tailwind.config.ts",
    plugins: ["prettier-plugin-tailwindcss"],
}

export default config
