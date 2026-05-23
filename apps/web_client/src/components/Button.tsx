import type { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "ghost" | "action" | "secondary"
}

export default function Button({
    children,
    variant = "primary",
    className = "",
    type = "button",
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center whitespace-nowrap transition-all duration-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 font-inter"
    const variants = {
        primary:
            "bg-color-content-primary text-color-bg-surface hover:bg-color-hover-primary shadow-sm rounded-lg px-4 py-2 text-body-m-bold",
        action: "bg-color-content-accent-gray text-color-bg-surface hover:bg-color-hover-accent-gray shadow-sm rounded-lg text-body-m-bold",
        secondary:
            "bg-color-bg-surface-date text-color-content-tertiary hover:bg-color-hover-surface-date rounded-full px-4 py-2 text-body-m font-medium",
        ghost: "bg-transparent text-color-content-tertiary hover:bg-color-hover-ghost/5 hover:text-color-content-primary rounded-lg px-4 py-2 text-body-m-bold",
    }

    return (
        <button type={type} className={`${baseStyles} ${variants[variant]} ${className}`.trim()} {...props}>
            {children}
        </button>
    )
}
