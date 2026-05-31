import { ru } from "date-fns/locale"
import { type DayButtonProps, DayPicker } from "react-day-picker"

function CustomDayButton(props: DayButtonProps) {
    const { modifiers, className, ...buttonProps } = props
    const isSelected = modifiers.selected

    const baseStyles =
        "h-9 w-9 flex items-center justify-center rounded-xl text-body-s transition-all active:scale-95 disabled:opacity-30 disabled:hover:bg-transparent"

    const stateStyles = isSelected
        ? "bg-color-content-primary text-color-bg-base cursor-pointer"
        : "hover:bg-color-hover-surface-date hover:text-color-content-primary"

    return <button {...buttonProps} className={`${baseStyles} ${stateStyles} ${className || ""}`.trim()} />
}

type DayGridProps = {
    navDate: Date
    selected?: Date
    onSelect?: (date: Date | undefined) => void
    onMonthChange?: (date: Date) => void
    disabled?: (date: Date) => boolean
}

export default function DayGrid({ navDate, selected, onSelect, onMonthChange, disabled }: DayGridProps) {
    return (
        <DayPicker
            mode="single"
            selected={selected}
            onSelect={onSelect}
            month={navDate}
            onMonthChange={onMonthChange}
            disabled={disabled}
            locale={ru}
            hideNavigation
            components={{
                MonthCaption: () => null,
                DayButton: CustomDayButton,
            }}
            classNames={{
                month_grid: "w-full border-collapse",
                weekdays: "flex mb-2",
                weekday: "text-color-content-disabled w-9 font-normal text-body-xs uppercase tracking-wider",
                weeks: "flex flex-col gap-1",
                week: "flex w-full",
                day: "h-9 w-9 p-0 font-normal relative flex items-center justify-center",
                today: "text-color-content-accent font-bold underline underline-offset-4 rounded-xl",
                outside: "text-color-content-disabled opacity-50",
            }}
        />
    )
}
