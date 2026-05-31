import { addMonths, addYears, format, setMonth, setYear, subMonths, subYears } from "date-fns"
import { type ReactNode, useEffect, useRef, useState } from "react"

export type ViewMode = "days" | "months" | "years"

type CalendarOption<T> = {
    value: T
    label: ReactNode
}

export function useCalendar(initialDate?: Date) {
    // Internal state for the grid navigation
    const [viewMode, setViewMode] = useState<ViewMode>("days")
    const [navDate, setNavDate] = useState(initialDate || new Date())

    // State for the picker (used by the form)
    const [selectedTime, setSelectedTime] = useState<string | number | null>(null)
    const [customDate, setCustomDate] = useState<Date | null>(initialDate || null)
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)
    const calendarRef = useRef<HTMLDivElement>(null)

    // Sync navDate when initialDate changes from outside (e.g. from props)
    const [prevInitialDate, setPrevInitialDate] = useState(initialDate)
    if (initialDate !== prevInitialDate) {
        setPrevInitialDate(initialDate)
        if (initialDate) setNavDate(initialDate)
    }

    // Logic for navigation (prev/next)
    const handlePrev = () => {
        if (viewMode === "days") setNavDate(subMonths(navDate, 1))
        else if (viewMode === "months") setNavDate(subYears(navDate, 1))
        else setNavDate(subYears(navDate, 9))
    }

    const handleNext = () => {
        if (viewMode === "days") setNavDate(addMonths(navDate, 1))
        else if (viewMode === "months") setNavDate(addYears(navDate, 1))
        else setNavDate(addYears(navDate, 9))
    }

    const setView = (mode: ViewMode) => setViewMode(mode)

    const selectMonth = (month: number) => {
        setNavDate(setMonth(navDate, month))
        setViewMode("days")
    }

    const selectYear = (year: number) => {
        setNavDate(setYear(navDate, year))
        setViewMode("days")
    }

    // Picker specific logic
    const openCalendar = () => setIsCalendarOpen(true)
    const toggleCalendar = () => setIsCalendarOpen((prev) => !prev)
    const closeCalendar = () => setIsCalendarOpen(false)

    const handleCalendarSelect = (date: Date | undefined) => {
        if (date) {
            setCustomDate(date)
            setSelectedTime("custom")
        }
        closeCalendar()
    }

    const handlePillChange = (val: string | number) => {
        setSelectedTime(val)
        if (val !== "custom") {
            setCustomDate(null)
            closeCalendar()
        } else {
            openCalendar()
        }
    }

    const getActiveOptions = <T extends string | number>(baseOptions: CalendarOption<T>[]) => {
        if (!customDate) return baseOptions

        const customOption: CalendarOption<string | number> = {
            value: "custom",
            label: format(customDate, "dd.MM.yyyy"),
        }

        return [...baseOptions, customOption] as CalendarOption<T | string | number>[]
    }

    // Handle click outside for the popover
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
                closeCalendar()
            }
        }
        if (isCalendarOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        }
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isCalendarOpen])

    return {
        // Grid state
        viewMode,
        navDate,
        setNavDate,
        handlePrev,
        handleNext,
        setView,
        selectMonth,
        selectYear,

        // Picker state
        selectedTime,
        customDate,
        isCalendarOpen,
        calendarRef,
        handleCalendarSelect,
        handlePillChange,
        getActiveOptions,
        toggleCalendar,
        closeCalendar,
    }
}
