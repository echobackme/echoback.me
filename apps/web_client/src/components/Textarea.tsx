import type { TextareaHTMLAttributes } from "react"

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = ({ className = "", ...props }: TextareaProps) => {
    return (
        <textarea
            className={`w-full resize-y rounded-lg border border-color-border-subtle/15 bg-color-bg-surface px-4 py-3 font-rubik text-body-s text-color-content-secondary outline-none transition-colors placeholder:text-color-content-tertiary/70 focus:border-color-border-focus/40 ${className}`.trim()}
            {...props}
        />
    )
}
