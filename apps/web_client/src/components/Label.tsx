import type { LabelHTMLAttributes } from "react"

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

export const Label = ({ children, className = "", ...props }: LabelProps) => {
    return (
        <label
            className={`mb-2 block font-inter text-body-xs text-color-content-tertiary ${className}`.trim()}
            {...props}
        >
            {children}
        </label>
    )
}
