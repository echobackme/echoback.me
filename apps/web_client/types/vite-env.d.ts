/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly LOCALE: import("../l10n.config").L10nLocale
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
