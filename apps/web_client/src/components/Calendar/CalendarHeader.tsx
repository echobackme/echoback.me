import { format } from "date-fns"
import { ru } from "date-fns/locale"

import Icon, { ICONS } from "../Icon"
import { ViewMode } from "./useCalendar"

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
        viewMode === "days" ? "Предыдущий месяц" : viewMode === "months" ? "Предыдущий год" : "Предыдущие 9 лет"
    const nextLabel =
        viewMode === "days" ? "Следующий месяц" : viewMode === "months" ? "Следующий год" : "Следующие 9 лет"

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
                    aria-label="Выбрать месяц"
                    aria-haspopup="grid"
                    aria-expanded={viewMode === "months"}
                    className={baseHeaderStyles + (viewMode === "months" ? " text-color-content-accent underline" : "")}
                >
                    {format(navDate, "LLLL", { locale: ru })}
                </button>
                <button
                    type="button"
                    onClick={() => onViewChange(viewMode === "years" ? "days" : "years")}
                    aria-label="Выбрать год"
                    aria-haspopup="grid"
                    aria-expanded={viewMode === "years"}
                    className={baseHeaderStyles + (viewMode === "years" ? " text-color-content-accent underline" : "")}
                >
                    {format(navDate, "yyyy", { locale: ru })}
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
