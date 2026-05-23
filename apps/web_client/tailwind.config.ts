import { type Config } from "tailwindcss"

export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                color: {
                    bg: {
                        base: "#F8F7F4",
                        surface: "#F4F4F2",
                        overlay: "#2E2E2E",
                    },
                    content: {
                        primary: "#2E2E2E",
                        secondary: "#4B4A46",
                        tertiary: "#5E5C59",
                        disabled: "#9A968F",
                        inverse: "#F4F4F2",
                    },
                    border: {
                        subtle: "#4B4A46",
                        focus: "#4B4A46",
                    },
                    shadow: {
                        primary: "#000000",
                        accent: "#2E2E2E",
                    },
                    hover: {
                        primary: "#3D3D3D",
                        secondary: "#2E2E2E",
                        ghost: "#2E2E2E",
                    },
                },
            },
            fontFamily: {
                playfair: ["Playfair Display", "serif"],
                rubik: ["Rubik", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
            fontSize: {
                h1: ["2.875rem", { lineHeight: "1.25", fontWeight: "400", letterSpacing: "0.06rem" }], // 46px/57.5px
                h2: ["2.5rem", { lineHeight: "1.25", fontWeight: "400", letterSpacing: "0.06rem" }], // 40px/50px
                h3: ["1.125rem", { lineHeight: "1.25", fontWeight: "400", letterSpacing: "0.06rem" }], // 18px/22.5px
                "body-m": ["1.25rem", { lineHeight: "1.25", fontWeight: "400", letterSpacing: "0.06rem" }], // 20px/25px
                "body-s": ["1rem", { lineHeight: "1.25", fontWeight: "400", letterSpacing: "0.06rem" }], // 16px/20px
                "body-s-bold": ["1rem", { lineHeight: "1.25", fontWeight: "700", letterSpacing: "0.06rem" }], // 16px/20px
                "body-xs": ["0.75rem", { lineHeight: "1.25", fontWeight: "400", letterSpacing: "0.06rem" }], // 12px/15px
            },
            backgroundImage: {
                "image-main-pattern": "url('/assets/main_pattern.png')",
            },
            zIndex: {
                modal: "9999",
            },
        },
    },
} satisfies Config
