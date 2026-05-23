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
                        "surface-soft": "#FBFAF7",
                        "surface-date": "#F2F1ED",
                        "surface-tabs": "#EEEBE1",
                        "surface-tabs-active": "#F4F2EB",
                        "surface-textarea": "#F2EFE7",
                        overlay: "#2E2E2E",
                        "checkbox-bg": "#E8DFDF",
                    },
                    content: {
                        primary: "#2E2E2E",
                        secondary: "#4B4A46",
                        tertiary: "#5E5C59",
                        disabled: "#9A968F",
                        inverse: "#F4F4F2",
                        accent: "#3F5F52",
                        "accent-gray": "#3F484E",
                        error: "#C46A6A",
                    },
                    border: {
                        subtle: "#D6D6D6",
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
                        "accent-gray": "#3D3D3D",
                        "surface-date": "#EEEBE1",
                    },
                },
            },
            fontFamily: {
                playfair: ["Playfair Display", "serif"],
                inter: ["Inter", "sans-serif"],
            },
            fontSize: {
                h1: ["2.875rem", { lineHeight: "1.25", fontWeight: "400", letterSpacing: "0.06rem" }], // 46px
                h2: ["2.5rem", { lineHeight: "1.25", fontWeight: "400", letterSpacing: "0.06rem" }], // 40px
                h3: ["1.75rem", { lineHeight: "1.25", fontWeight: "400" }], // 28px
                h4: ["1.25rem", { lineHeight: "1.25", fontWeight: "400", letterSpacing: "0.06rem" }], // 20px
                "body-l": ["1.125rem", { lineHeight: "1.25", fontWeight: "400", letterSpacing: "0.06rem" }], // 18px
                "body-m": ["1rem", { lineHeight: "1.25", fontWeight: "400", letterSpacing: "0.06rem" }], // 16px
                "body-m-bold": ["1rem", { lineHeight: "1.25", fontWeight: "700", letterSpacing: "0.06rem" }], // 16px Bold
                "body-s": ["0.875rem", { lineHeight: "1.25", fontWeight: "500" }], // 14px
                "body-xs": ["0.75rem", { lineHeight: "1.25", fontWeight: "400", letterSpacing: "0.06rem" }], // 12px
            },
            backgroundImage: {
                "image-main-pattern": "url('/assets/main_pattern.png')",
            },
            zIndex: {
                modal: "9999",
                tooltip: "50",
            },
            boxShadow: {
                section: "0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25)",
                card: "0 0.25rem 0.75rem 0.3125rem rgba(0, 0, 0, 0.15)",
                modal: "0 0.5rem 0.625rem 0 rgba(0, 0, 0, 0.25)",
            },
        },
    },
} satisfies Config
