import type { InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement>

export default function Input({ className = "", ...props }: InputProps) {
    return (
        <input
            className={`w-full rounded-lg border-2 border-color-border-subtle bg-white px-4 py-3 font-inter text-body-m text-color-content-secondary outline-none transition-colors placeholder:text-color-content-tertiary/70 focus:border-color-border-focus/60 ${className}`.trim()}
            {...props}
        />
    )
}
