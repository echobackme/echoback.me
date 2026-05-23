import { InputHTMLAttributes, ReactNode, useId } from "react"

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    children?: ReactNode
}

export default function Checkbox({ children, className = "", id: providedId, ...props }: CheckboxProps) {
    const generatedId = useId()
    const id = providedId || generatedId

    return (
        <label htmlFor={id} className={`flex cursor-pointer items-center gap-3 ${className}`.trim()}>
            <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-color-bg-checkbox-bg">
                <input {...props} type="checkbox" id={id} className="peer sr-only" />
                <svg
                    className="hidden size-4 text-color-content-accent peer-checked:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            {children && <span className="text-body-s text-color-content-tertiary">{children}</span>}
        </label>
    )
}
