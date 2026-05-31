import { t } from "@lingui/core/macro"

import { browserRegionLocale } from "~/i18n"

import Icon, { ICONS } from "../Icon"
import { type ViewMode } from "./useCalendar"

type CalendarHeaderProps = {
    navDate: Date
    viewMode: ViewMode
    onPrev: () => void
    onNext: () => void
    onViewChange: (mode: ViewMode) => void
}

export default function CalendarHeader({ navDate, viewMode, onPrev, onNext, onViewChange }: CalendarHeaderProps) {
    const baseHeaderStyles =
        "text-body-m-bold transition-all hover:text-color-content-accent capitalize underline-offset-4 hover:underline"

    const prevLabel =
        viewMode === "days"
            ? t({ id: "l10n.calendar.nav.prev_month", message: "Предыдущий месяц" })
            : viewMode === "months"
              ? t({ id: "l10n.calendar.nav.prev_year", message: "Предыдущий год" })
              : t({ id: "l10n.calendar.nav.prev_9_years", message: "Предыдущие 9 лет" })
    const nextLabel =
        viewMode === "days"
            ? t({ id: "l10n.calendar.nav.next_month", message: "Следующий месяц" })
            : viewMode === "months"
              ? t({ id: "l10n.calendar.nav.next_year", message: "Следующий год" })
              : t({ id: "l10n.calendar.nav.next_9_years", message: "Следующие 9 лет" })

    // Use Intl API for formatted display names (zero bundle size, browser native)
    const monthName = new Intl.DateTimeFormat(browserRegionLocale, { month: "long" }).format(navDate)
    const yearName = new Intl.DateTimeFormat(browserRegionLocale, { year: "numeric" }).format(navDate)

    return (
        <div className="mb-4 flex h-10 items-center justify-center gap-1">
            <button
                type="button"
                onClick={onPrev}
                aria-label={prevLabel}
                className="flex size-9 items-center justify-center rounded-xl text-color-content-tertiary transition-all hover:bg-color-hover-ghost/5 active:scale-90"
            >
                <Icon src={ICONS.ARROW_RIGHT} size={20} className="rotate-180" />
            </button>

            <div className="flex flex-1 items-center justify-center gap-1 px-1">
                <button
                    type="button"
                    onClick={() => onViewChange(viewMode === "months" ? "days" : "months")}
                    aria-label={t({ id: "l10n.calendar.nav.select_month", message: "Выбрать месяц" })}
                    aria-haspopup="grid"
                    aria-expanded={viewMode === "months"}
                    className={baseHeaderStyles + (viewMode === "months" ? " text-color-content-accent underline" : "")}
                >
                    {monthName}
                </button>
                <button
                    type="button"
                    onClick={() => onViewChange(viewMode === "years" ? "days" : "years")}
                    aria-label={t({ id: "l10n.calendar.nav.select_year", message: "Выбрать год" })}
                    aria-haspopup="grid"
                    aria-expanded={viewMode === "years"}
                    className={baseHeaderStyles + (viewMode === "years" ? " text-color-content-accent underline" : "")}
                >
                    {yearName}
                </button>
            </div>

            <button
                type="button"
                onClick={onNext}
                aria-label={nextLabel}
                className="flex size-9 items-center justify-center rounded-xl text-color-content-tertiary transition-all hover:bg-color-hover-ghost/5 active:scale-90"
            >
                <Icon src={ICONS.ARROW_RIGHT} size={20} />
            </button>
        </div>
    )
}
