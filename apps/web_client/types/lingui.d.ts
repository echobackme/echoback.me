import { type L10nKey } from "./l10nKeys"

declare module "@lingui/core" {
    export interface MessageDescriptor {
        id: L10nKey
    }
}

declare module "@lingui/react" {
    export interface TransProps {
        id: L10nKey
    }
}
