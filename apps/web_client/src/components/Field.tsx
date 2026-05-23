import type { ReactNode } from "react"

import Label from "./Label"

type FieldProps = {
    label?: ReactNode
    id?: string
    children: ReactNode
    className?: string
    horizontal?: boolean
    labelClassName?: string
}

export default function Field({
    label,
    id,
    children,
    className = "",
    horizontal = false,
    labelClassName = "",
}: FieldProps) {
    return (
        <div
            className={`w-full ${horizontal ? "grid grid-cols-[100px_1fr] items-center gap-4" : "flex flex-col gap-1"} ${className}`.trim()}
        >
            {label && (
                <Label htmlFor={id} className={`mb-0 ${horizontal ? "text-right" : ""} ${labelClassName}`.trim()}>
                    {label}
                </Label>
            )}
            <div className="grow">{children}</div>
        </div>
    )
}
