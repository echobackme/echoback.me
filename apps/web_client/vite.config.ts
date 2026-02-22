import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import checker from "vite-plugin-checker"

export default defineConfig({
    plugins: [
        react(),
        checker({
            typescript: true,
        }),
    ],
    server: {
        port: 5005,
        strictPort: true,
    },
    build: {
        outDir: ".build",
        sourcemap: true,
    },
})
