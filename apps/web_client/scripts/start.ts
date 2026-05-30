import { spawn } from "node:child_process"

import { intro, isCancel, outro, select } from "@clack/prompts"

import { locales } from "../l10n.config"

async function start() {
    intro("Init Dev Server")

    const locale = await select({
        message: "Select locale to start:",
        options: locales.map((l) => ({ value: l, label: l })),
    })

    if (isCancel(locale)) {
        outro("Operation cancelled")
        process.exit(0)
    }

    outro(`Starting server for locale: ${locale}`)

    const vite = spawn("vite", {
        env: { ...process.env, LOCALE: locale as string },
        stdio: "inherit",
        shell: true,
    })

    vite.on("error", (err) => {
        console.error("Failed to start Vite:", err)
        process.exit(1)
    })

    vite.on("exit", (code) => {
        process.exit(code ?? 0)
    })
}

start()
