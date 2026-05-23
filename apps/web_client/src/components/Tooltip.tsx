import { ReactNode, useState } from "react"

type TooltipProps = {
    children: ReactNode
    content: string
}

export default function Tooltip({ children, content }: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div
            className="relative inline-flex items-center"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <div className="absolute bottom-full left-1/2 z-tooltip mb-2 w-max -translate-x-1/2 rounded-md bg-color-content-primary px-3 py-1.5 text-body-xs text-color-bg-base shadow-lg">
                    {content}
                    <div className="absolute left-1/2 top-full -translate-x-1/2 border-8 border-transparent border-t-color-content-primary" />
                </div>
            )}
        </div>
    )
}
