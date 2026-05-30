import type { LinguiConfig } from "@lingui/conf"

import { locales } from "./l10n.config"
import { linguiFormatter } from "./scripts/linguiFormatter"

export default {
    locales: [...locales],
    catalogs: [
        {
            path: "<rootDir>/locales/{locale}",
            include: ["<rootDir>/src"],
        },
    ],
    format: linguiFormatter,
} satisfies LinguiConfig
