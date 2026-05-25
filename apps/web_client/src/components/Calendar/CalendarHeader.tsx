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

    return (
        <div className="mb-4 flex h-10 items-center justify-center gap-1">
            <button
                type="button"
                onClick={onPrev}
                className="flex size-9 items-center justify-center rounded-xl text-color-content-tertiary transition-all hover:bg-color-hover-ghost/5 active:scale-90"
            >
                <Icon src={ICONS.ARROW_RIGHT} size={20} className="rotate-180" />
            </button>

            <div className="flex flex-1 items-center justify-center gap-1 px-1">
                <button
                    type="button"
                    onClick={() => onViewChange(viewMode === "months" ? "days" : "months")}
                    className={baseHeaderStyles + (viewMode === "months" ? " text-color-content-accent underline" : "")}
                >
                    {format(navDate, "LLLL", { locale: ru })}
                </button>
                <button
                    type="button"
                    onClick={() => onViewChange(viewMode === "years" ? "days" : "years")}
                    className={baseHeaderStyles + (viewMode === "years" ? " text-color-content-accent underline" : "")}
                >
                    {format(navDate, "yyyy", { locale: ru })}
                </button>
            </div>

            <button
                type="button"
                onClick={onNext}
                className="flex size-9 items-center justify-center rounded-xl text-color-content-tertiary transition-all hover:bg-color-hover-ghost/5 active:scale-90"
            >
                <Icon src={ICONS.ARROW_RIGHT} size={20} />
            </button>
        </div>
    )
}
