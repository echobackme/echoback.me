import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"
import checker from "vite-plugin-checker"

export default defineConfig({
    plugins: [
        react(),
        checker({
            typescript: true,
        }),
    ],
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        port: 5005,
        strictPort: true,
    },
    build: {
        outDir: ".build",
        sourcemap: true,
    },
})
