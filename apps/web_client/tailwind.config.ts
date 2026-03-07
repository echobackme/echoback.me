import type { Config } from "tailwindcss"

export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                color: {
                    bg: "#F8F7F4",
                    surface: "#F4F4F2",
                    text: "#4B4A46",
                    hover: "#9A968F",
                },
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            fontSize: {
                "body-xs": ["0.75rem", { lineHeight: "1.25", fontWeight: "400", letterSpacing: "0" }], // 12px/15px
                "body-s": ["1rem", { lineHeight: "1.25", fontWeight: "400", letterSpacing: "0" }], // 16px/20px
            },
            backgroundImage: {
                "image-main-pattern": "url('/assets/main_pattern.png')",
            },
        },
    },
} satisfies Config
