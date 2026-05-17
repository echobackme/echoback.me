import type { InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = ({ className = "", ...props }: InputProps) => {
    return (
        <input
            className={`w-full rounded-lg border border-color-text/15 bg-color-surface px-4 py-3 font-rubik text-body-s text-color-text outline-none transition-colors placeholder:text-color-caption/70 focus:border-color-text/40 ${className}`.trim()}
            {...props}
        />
    )
}
