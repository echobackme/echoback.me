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
        <div className="grid grid-cols-3 gap-2 py-2">
            {months.map((m) => {
                const isCurrent = m === navDate.getMonth()
                const monthDate = new Date(navDate.getFullYear(), m, 1)
                const isPast = isBefore(monthDate, todayStart)

                let monthStyles =
                    "rounded-xl py-3 text-body-s capitalize transition-all disabled:opacity-20 disabled:hover:bg-transparent "

                if (isCurrent) {
                    monthStyles += "bg-color-content-primary text-color-bg-base "
                } else {
                    monthStyles += "hover:bg-color-hover-surface-date hover:text-color-content-primary"
                }

                return (
                    <button
                        key={m}
                        type="button"
                        disabled={isPast}
                        onClick={() => onSelect(m)}
                        className={monthStyles.trim()}
                    >
                        {format(monthDate, "LLL", { locale: ru })}
                    </button>
                )
            })}
        </div>
    )
}
