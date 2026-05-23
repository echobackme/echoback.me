import type { TextareaHTMLAttributes } from "react"

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export default function Textarea({ className = "", ...props }: TextareaProps) {
    return (
        <textarea
            className={`w-full resize-y rounded-2xl border-none bg-color-bg-surface-textarea px-6 py-4 font-inter text-body-m text-color-content-secondary outline-none transition-colors placeholder:text-color-content-tertiary/70 focus:ring-2 focus:ring-color-border-focus/20 ${className}`.trim()}
            {...props}
        />
    )
}
