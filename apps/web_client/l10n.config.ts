export const locales = ["ru"] as const
export type L10nLocale = (typeof locales)[number]

export const isMultiLocale = locales.length > 1
