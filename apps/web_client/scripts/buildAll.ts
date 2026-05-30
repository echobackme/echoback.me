import { spawn } from "node:child_process"
import { existsSync } from "node:fs"
import { cp, mkdir, rm } from "node:fs/promises"

import { locales } from "../l10n.config"

const BUILD_DIR = ".build"

async function copyPublicAssets() {
    console.log("Copying public assets...")
    if (existsSync("public")) {
        await cp("public", BUILD_DIR, { recursive: true })
    }
}

async function buildLocale(locale: string) {
    console.log(`Starting build for locale: ${locale}`)

    return new Promise<void>((resolve, reject) => {
        const buildProcess = spawn("yarn tsc && yarn vite build", {
            env: { ...process.env, LOCALE: locale, BUILD_DIR },
            stdio: "ignore",
            shell: true,
        })

        buildProcess.on("close", (code) => {
            if (code === 0) {
                console.log(`Finished build for locale: ${locale}`)
                resolve()
            } else {
                reject(new Error(`Build failed for locale: ${locale} with code ${code}`))
            }
        })
    })
}

async function buildAll() {
    console.log(`Preparing build directory: ${BUILD_DIR}...`)

    await rm(BUILD_DIR, { recursive: true, force: true })
    await mkdir(BUILD_DIR, { recursive: true })

    console.log("Starting build...")

    try {
        const buildPromises = locales.map(buildLocale)
        const copyPromise = copyPublicAssets()

        await Promise.all([...buildPromises, copyPromise])

        console.log("\nAll tasks completed successfully!")
        console.log(`\nFiles generated in: ${BUILD_DIR}/`)
    } catch (err) {
        console.error("\nOne or more tasks failed:\n", err)
        process.exit(1)
    }
}

buildAll()
