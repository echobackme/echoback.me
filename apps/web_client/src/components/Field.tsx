import type { ReactNode } from "react"

import { Label } from "./Label"

type FieldProps = {
    label?: string
    id?: string
    children: ReactNode
    className?: string
}

export const Field = ({ label, id, children, className = "" }: FieldProps) => {
    return (
        <div className={`w-full ${className}`.trim()}>
            {label && <Label htmlFor={id}>{label}</Label>}
            {children}
        </div>
    )
}
