type YearGridProps = {
    navDate: Date
    onSelect: (value: number) => void
}

export default function YearGrid({ navDate, onSelect }: YearGridProps) {
    const todayYear = new Date().getFullYear()
    const currentYear = navDate.getFullYear()
    const years = Array.from({ length: 9 }, (_, i) => currentYear - 4 + i)

    return (
        <div className="grid grid-cols-3 gap-2 py-2">
            {years.map((y) => {
                const isCurrent = y === currentYear
                const isPast = y < todayYear

                let yearStyles =
                    "rounded-xl py-3 text-body-s transition-all disabled:opacity-20 disabled:hover:bg-transparent "

                if (isCurrent) {
                    yearStyles += "bg-color-content-primary text-color-bg-base "
                } else {
                    yearStyles += "hover:bg-color-hover-surface-date hover:text-color-content-primary"
                }

                return (
                    <button
                        key={y}
                        type="button"
                        disabled={isPast}
                        onClick={() => onSelect(y)}
                        className={yearStyles.trim()}
                    >
                        {y}
                    </button>
                )
            })}
        </div>
    )
}
