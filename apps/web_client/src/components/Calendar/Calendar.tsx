import CalendarHeader from "./CalendarHeader"
import DayGrid from "./DayGrid"
import MonthGrid from "./MonthGrid"
import { useCalendar } from "./useCalendar"
import YearGrid from "./YearGrid"

type CalendarProps = {
    selected?: Date
    onSelect?: (date: Date | undefined) => void
    disabled?: (date: Date) => boolean
}

export default function Calendar({ selected, onSelect, disabled }: CalendarProps) {
    const { viewMode, navDate, setNavDate, handlePrev, handleNext, setView, selectMonth, selectYear } =
        useCalendar(selected)

    return (
        <div className="w-72 rounded-2xl border border-color-border-subtle bg-color-bg-base p-4 font-inter text-color-content-primary shadow-modal">
            <CalendarHeader
                navDate={navDate}
                viewMode={viewMode}
                onPrev={handlePrev}
                onNext={handleNext}
                onViewChange={setView}
            />

            {viewMode === "days" && (
                <DayGrid
                    navDate={navDate}
                    selected={selected}
                    onSelect={onSelect}
                    onMonthChange={setNavDate}
                    disabled={disabled}
                />
            )}
            {viewMode === "months" && <MonthGrid navDate={navDate} onSelect={selectMonth} />}
            {viewMode === "years" && <YearGrid navDate={navDate} onSelect={selectYear} />}
        </div>
    )
}
