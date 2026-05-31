import { type ReactNode } from "react"

type Option<T> = {
    value: T
    label: ReactNode
}

type PillGroupProps<T extends string | number> = {
    options: Option<T>[]
    selectedValue: T | null
    onChange: (value: T) => void
    name: string
}

export default function PillGroup<T extends string | number>({
    options,
    selectedValue,
    onChange,
    name,
}: PillGroupProps<T>) {
    return (
        <div className="flex gap-2" role="radiogroup">
            {options.map((option) => {
                const isSelected = selectedValue === option.value
                const id = `pill-${name}-${option.value}`
                return (
                    <label
                        key={option.value}
                        htmlFor={id}
                        onClick={() => isSelected && onChange(option.value)}
                        className={`flex h-9 cursor-pointer items-center justify-center whitespace-nowrap rounded-full px-4 py-2 font-inter text-body-m font-medium transition-all duration-200 ${
                            isSelected
                                ? "bg-color-content-primary text-color-bg-base"
                                : "bg-color-bg-surface-date text-color-content-tertiary hover:bg-color-hover-surface-date hover:text-color-content-primary"
                        } `.trim()}
                    >
                        <input
                            type="radio"
                            id={id}
                            name={name}
                            value={option.value}
                            checked={isSelected}
                            onChange={() => onChange(option.value)}
                            className="sr-only"
                        />
                        {option.label}
                    </label>
                )
            })}
        </div>
    )
}
