import type { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "ghost"
}

export const Button = ({ children, variant = "primary", className = "", type = "button", ...props }: ButtonProps) => {
    const baseStyles =
        "inline-flex items-center justify-center rounded-lg px-4 py-2 font-inter text-body-s-bold transition-all duration-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
    const variants = {
        primary: "bg-color-content-primary text-color-bg-surface hover:bg-color-hover-primary shadow-sm",
        ghost: "bg-transparent text-color-content-tertiary hover:bg-color-hover-ghost/5 hover:text-color-content-primary",
    }

    return (
        <button type={type} className={`${baseStyles} ${variants[variant]} ${className}`.trim()} {...props}>
            {children}
        </button>
    )
}
