import { i18n } from "@lingui/core"
import { type Locale, ru } from "date-fns/locale"
import React, { type ReactNode } from "react"
import { messages } from "virtual:locale-catalog"

import { type L10nLocale, locales } from "../l10n.config"

export { type L10nLocale, locales }

// The locale is injected by Vite during the build process via 'define'
export const currentLocale = import.meta.env.LOCALE

if (!currentLocale) {
    throw new Error("LOCALE environment variable is not defined")
}

const hasLocalePrefix =
    typeof window !== "undefined" &&
    locales.some((locale) => (window.location.pathname + "/").startsWith(`/${locale}/`))

export const browserRouterBasename = hasLocalePrefix ? `/${currentLocale}` : "/"

// Get the full region locale from the browser (e.g., "ru-RU" or "en-US")
// Fallback to the short currentLocale if browser detection fails
export const browserRegionLocale =
    typeof window !== "undefined" && navigator.languages?.length
        ? // TODO: Investigate fallback here, looks like we can set up incorrect locale
          navigator.languages.find((lang) => lang.startsWith(currentLocale)) || navigator.language
        : currentLocale

// Date-fns locales for structural logic (e.g., week starts on Monday in RU)
const DATE_FNS_MAP: Record<string, Locale> = {
    ru: ru,
}

// TODO: Why do we need fallback here? DATE_FNS_MAP should always include currentLocale
export const dateFnsLocale = DATE_FNS_MAP[currentLocale] || ru

/**
 * The catalog import is compiled by @lingui/vite-plugin
 */
export function initI18n() {
    i18n.load(currentLocale, messages)
    i18n.activate(currentLocale)
}

/**
 * Formats a localized string containing tags like <tag>content</tag>, <tag> or variables {var}.
 * Returns an array of React nodes.
 *
 * Example:
 * formatL10n("Hello <bold>{name}</bold>!<br>Next line", {
 *   name: "World",
 *   bold: (chunk) => <b>{chunk}</b>,
 *   br: <br />
 * })
 */
export function formatL10n(
    message: string,
    values: Record<string, ReactNode | ((chunk: ReactNode) => ReactNode)>,
): ReactNode[] {
    const parts: ReactNode[] = []
    // Match <tag>content</tag>, <tag> or {variable}
    const regex = /<(\w+)>(.*?)<\/\1>|<(\w+)>|\{(\w+)\}/g

    let lastIndex = 0
    let match

    while ((match = regex.exec(message)) !== null) {
        // Push text before the match
        if (match.index > lastIndex) {
            parts.push(message.substring(lastIndex, match.index))
        }

        const pairedTag = match[1]
        const content = match[2]
        const singleTag = match[3]
        const variable = match[4]

        const key = parts.length

        if (pairedTag) {
            // Paired tag match: <tag>content</tag>
            const formatter = values[pairedTag]
            if (typeof formatter === "function") {
                // Recursively format content if it contains more tags/vars
                const element = formatter(formatL10n(content, values))
                if (React.isValidElement(element)) {
                    parts.push(React.cloneElement(element, { key }))
                } else {
                    parts.push(element)
                }
            } else {
                parts.push(match[0])
            }
        } else if (singleTag || variable) {
            // Single tag <tag> or variable {variable}
            const valKey = singleTag || variable
            const value = values[valKey]
            const element = value !== undefined ? (value as ReactNode) : match[0]

            if (React.isValidElement(element)) {
                parts.push(React.cloneElement(element, { key }))
            } else {
                parts.push(element)
            }
        }

        lastIndex = regex.lastIndex
    }

    // Push remaining text
    if (lastIndex < message.length) {
        parts.push(message.substring(lastIndex))
    }

    return parts
}
