import { i18n } from "@lingui/core"

import { isMultiLocale, type L10nLocale, locales } from "../l10n.config"

export { isMultiLocale, type L10nLocale, locales }

// The locale is injected by Vite during the build process via 'define'
export const currentLocale = import.meta.env.LOCALE

if (!currentLocale) {
    throw new Error("LOCALE environment variable is not defined")
}

export const browserRouterBasename = isMultiLocale ? `/${currentLocale}` : "/"

// Use Intl API for future formatting needs (Date/Number formatters)
// export const browserRegionLocale =
//     typeof window !== "undefined" && navigator.languages && navigator.languages.length > 0
//         ? navigator.languages.find((lang) => lang.startsWith(currentLocale)) || navigator.language
//         : currentLocale

/**
 * In 'block' mode, translations are inlined at build time.
 * However, we still need to activate the locale for runtime logic:
 * 1. Native Intl API (formatting dates, numbers, etc.)
 * 2. Lingui runtime features (pluralization rules and complex interpolations)
 *
 * We load an empty object to silence the "Messages not loaded" warning.
 */
export function initI18n() {
    i18n.load(currentLocale, {})
    i18n.activate(currentLocale)
}
