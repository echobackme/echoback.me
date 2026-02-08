import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import checker from "vite-plugin-checker"

export default defineConfig({
    plugins: [
        react(),
        checker({
            typescript: true,
            overlay: {
                initialIsOpen: false,
            },
        }),
    ],
    server: {
        port: 5005,
        host: true,
        strictPort: true,
    },
    build: {
        outDir: ".build",
        sourcemap: true,
    },
})
