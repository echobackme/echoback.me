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
                    header: "#2E2E2E",
                    caption: "#5E5C59",
                },
            },
            fontFamily: {
                playfair: ["Playfair Display", "serif"],
                rubik: ["Rubik", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
            fontSize: {
                "header-h1": ["2.875rem", { lineHeight: "1.25", fontWeight: "400", letterSpacing: "0.06rem" }], // 46px/57.5px
                "body-xs": ["0.75rem", { lineHeight: "1.25", fontWeight: "400", letterSpacing: "0.06rem" }], // 12px/15px
                "body-s": ["1rem", { lineHeight: "1.25", fontWeight: "400", letterSpacing: "0.06rem" }], // 16px/20px
                "body-s-strong": ["1rem", { lineHeight: "1.25", fontWeight: "700", letterSpacing: "0.06rem" }], // 16px/20px
                "body-m": ["1.25rem", { lineHeight: "1.25", fontWeight: "400", letterSpacing: "0.06rem" }], // 20px/25px
            },
            backgroundImage: {
                "image-main-pattern": "url('/assets/main_pattern.png')",
            },
        },
    },
} satisfies Config
