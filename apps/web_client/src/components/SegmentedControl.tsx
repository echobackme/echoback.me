type Option<T> = {
    value: T
    label: string
}

type SegmentedControlProps<T extends string> = {
    options: Option<T>[]
    selectedValue: T
    onChange: (value: T) => void
    name: string
}

export default function SegmentedControl<T extends string>({
    options,
    selectedValue,
    onChange,
    name,
}: SegmentedControlProps<T>) {
    return (
        <div
            className="flex h-11 w-full max-w-sm items-center rounded-2xl bg-color-bg-surface-tabs p-1"
            role="radiogroup"
        >
            {options.map((option) => {
                const isSelected = selectedValue === option.value
                const id = `segmented-${name}-${option.value}`
                return (
                    <label
                        key={option.value}
                        htmlFor={id}
                        className={`flex flex-1 cursor-pointer items-center justify-center whitespace-nowrap rounded-xl py-2 font-inter text-body-m font-medium transition-all duration-200 ${
                            isSelected
                                ? "bg-color-bg-surface-tabs-active text-color-content-primary shadow-sm"
                                : "text-color-content-primary/60 hover:bg-color-bg-surface-tabs-active/50 hover:text-color-content-primary"
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
