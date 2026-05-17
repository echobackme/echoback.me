import type { InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = ({ className = "", ...props }: InputProps) => {
    return (
        <input
            className={`w-full rounded-lg border border-color-border-subtle/15 bg-color-bg-surface px-4 py-3 font-rubik text-body-s text-color-content-secondary outline-none transition-colors placeholder:text-color-content-tertiary/70 focus:border-color-border-focus/40 ${className}`.trim()}
            {...props}
        />
    )
}
