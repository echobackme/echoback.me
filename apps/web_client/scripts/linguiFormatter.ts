import type { CatalogFormatter, CatalogType } from "@lingui/conf"

export const linguiFormatter: CatalogFormatter = {
    catalogExtension: ".po",

    parse(content: string) {
        const catalog: CatalogType = {}
        const entries = content.split("\n\n")

        for (const entry of entries) {
            const lines = entry.split("\n")

            let msgid = ""
            let msgstr = ""
            const origin: [string, number][] = []

            for (const line of lines) {
                if (line.startsWith("# ")) {
                    const originPath = line.replace("# ", "").trim()
                    if (originPath) {
                        origin.push([originPath, 0])
                    }
                } else if (line.startsWith("msgid ")) {
                    msgid = line.match(/"(.*)"/)?.[1] || ""
                } else if (line.startsWith("msgstr ")) {
                    msgstr = line.match(/"(.*)"/)?.[1] || ""
                }
            }

            if (msgid) {
                catalog[msgid] = {
                    translation: msgstr,
                    origin: origin.length > 0 ? origin : undefined,
                }
            }
        }

        return catalog
    },

    serialize(catalog: CatalogType) {
        const output: string[] = []

        // Sort keys for consistent file output
        const keys = Object.keys(catalog).sort()

        for (const key of keys) {
            const entry = catalog[key]

            // Path (Comment)
            const origins = entry.origin || []
            if (origins.length > 0) {
                for (const [path] of origins) {
                    output.push(`# ${path}`)
                }
            } else {
                output.push("# unknown")
            }

            output.push(`msgid "${key}"`)

            // Use existing translation or fallback to the 'message' from code
            const translation = entry.translation || entry.message || ""
            output.push(`msgstr "${translation}"`)

            // Blank line between entries
            output.push("")
        }

        return output.join("\n").trim() + "\n"
    },
}
