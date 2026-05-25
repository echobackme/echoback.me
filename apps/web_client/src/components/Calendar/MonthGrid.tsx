import { format, isBefore, startOfMonth } from "date-fns"
import { ru } from "date-fns/locale"

type MonthGridProps = {
    navDate: Date
    onSelect: (value: number) => void
}

export default function MonthGrid({ navDate, onSelect }: MonthGridProps) {
    const months = Array.from({ length: 12 }, (_, i) => i)
    const todayStart = startOfMonth(new Date())

    return (
        <div className="grid grid-cols-3 gap-2 py-2" role="grid" aria-label="Выбор месяца">
            {months.map((m) => {
                const isCurrent = m === navDate.getMonth()
                const monthDate = new Date(navDate.getFullYear(), m, 1)
                const isPast = isBefore(monthDate, todayStart)

                const baseStyles =
                    "rounded-xl py-3 text-body-s capitalize transition-all disabled:opacity-20 disabled:hover:bg-transparent "
                const stateStyles = isCurrent
                    ? "bg-color-content-primary text-color-bg-base"
                    : "hover:bg-color-hover-surface-date hover:text-color-content-primary"

                return (
                    <button
                        key={m}
                        type="button"
                        role="gridcell"
                        aria-selected={isCurrent}
                        disabled={isPast}
                        onClick={() => onSelect(m)}
                        className={baseStyles + stateStyles}
                    >
                        {format(monthDate, "LLL", { locale: ru })}
                    </button>
                )
            })}
        </div>
    )
}
