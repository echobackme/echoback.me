import type { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "ghost"
}

export const Button = ({ children, variant = "primary", className = "", type = "button", ...props }: ButtonProps) => {
    const baseStyles =
        "inline-flex items-center justify-center rounded-lg px-4 py-2 font-inter text-body-s-strong transition-all duration-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
    const variants = {
        primary: "bg-color-text text-color-surface hover:bg-color-text/80 shadow-sm hover:shadow",
        ghost: "bg-transparent text-color-caption hover:bg-color-text/5 hover:text-color-text",
    }

    return (
        <button type={type} className={`${baseStyles} ${variants[variant]} ${className}`.trim()} {...props}>
            {children}
        </button>
    )
}
