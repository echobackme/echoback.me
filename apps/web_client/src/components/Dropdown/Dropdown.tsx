import Icon, { ICONS } from "../Icon"
import { useDropdown } from "./useDropdown"

type DropdownOption<T> = {
    value: T
    label: string
}

type DropdownProps<T> = {
    initialValue: T
    options: DropdownOption<T>[]
    className?: string
}

export default function Dropdown<T extends string | number>({
    initialValue,
    options,
    className = "",
}: DropdownProps<T>) {
    const { isOpen, dropdownRef, toggle, close, selectedValue, handleSelect } = useDropdown(initialValue)

    const selectedOption = options.find((opt) => opt.value === selectedValue)
    const selectedLabel = selectedOption?.label || selectedValue

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Escape") close()
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            toggle()
        }
    }

    const containerClassName = "relative " + className
    const iconClassName = "transition-transform duration-200 " + (isOpen ? "-rotate-90" : "rotate-90")

    return (
        <div className={containerClassName.trim()} ref={dropdownRef}>
            <button
                type="button"
                onClick={toggle}
                onKeyDown={handleKeyDown}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-label={`Выбрано: ${selectedLabel}. Нажмите для изменения`}
                className="flex items-center gap-1 rounded-xl px-3 py-2 text-body-m font-medium text-color-content-tertiary transition-all hover:bg-color-hover-ghost/5 active:scale-95"
            >
                <span className="uppercase">{selectedLabel}</span>
                <Icon src={ICONS.ARROW_RIGHT} size={16} className={iconClassName} />
            </button>

            {isOpen && (
                <ul
                    role="listbox"
                    tabIndex={-1}
                    className="absolute right-0 top-full z-tooltip mt-2 overflow-hidden rounded-2xl border border-color-border-subtle bg-color-bg-base py-1 shadow-modal"
                >
                    {options.map((option) => {
                        const isSelected = option.value === selectedValue

                        const baseItemStyles =
                            "w-full px-4 py-2 text-left text-body-s transition-colors hover:bg-color-hover-surface-date "
                        const stateStyles = isSelected
                            ? "font-bold text-color-content-primary"
                            : "text-color-content-tertiary"

                        return (
                            <li key={option.value} role="none">
                                <button
                                    role="option"
                                    type="button"
                                    aria-selected={isSelected}
                                    onClick={() => {
                                        handleSelect(option.value)
                                        close()
                                    }}
                                    className={baseItemStyles + stateStyles}
                                >
                                    {option.label}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}
