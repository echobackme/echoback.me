import { lingui } from "@lingui/vite-plugin"
import react from "@vitejs/plugin-react"
import { parse } from "node-html-parser"
import path from "path"
import { defineConfig } from "vite"
import checker from "vite-plugin-checker"

import { type L10nLocale } from "./l10n.config"

export default defineConfig(({ command }) => {
    const locale = process.env.LOCALE as L10nLocale
    const outDirBase = process.env.BUILD_DIR as string
    const isBuild = command === "build"

    if (!locale) {
        throw new Error("LOCALE environment variable is required")
    }

    if (isBuild && !outDirBase) {
        throw new Error("BUILD_DIR environment variable is required during build")
    }

    return {
        base: isBuild ? `/${locale}/` : "/",
        define: {
            "import.meta.env.LOCALE": JSON.stringify(locale),
        },
        plugins: [
            react({
                babel: {
                    plugins: ["@lingui/babel-plugin-lingui-macro"],
                },
            }),
            lingui(),
            !isBuild &&
                checker({
                    typescript: true,
                }),
            {
                name: "html-transform",
                transformIndexHtml(html) {
                    const root = parse(html)
                    const htmlElement = root.querySelector("html")
                    if (htmlElement) {
                        htmlElement.setAttribute("lang", locale)
                    }
                    return root.toString()
                },
            },
        ],
        resolve: {
            alias: {
                "~": path.resolve(__dirname, "./src"),
                "virtual:locale-catalog": path.resolve(__dirname, `./locales/${locale}.po`),
            },
        },
        server: {
            port: 5005,
            strictPort: true,
        },
        build: {
            outDir: `${outDirBase}/${locale}`,
            emptyOutDir: true,
            copyPublicDir: false,
            assetsDir: "",
            sourcemap: false,
        },
    }
})
