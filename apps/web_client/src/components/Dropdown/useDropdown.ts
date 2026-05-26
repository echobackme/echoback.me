import { useEffect, useRef, useState } from "react"

export function useDropdown<T>(initialValue: T) {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState<T>(initialValue)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const toggle = () => setIsOpen((prev) => !prev)
    const close = () => setIsOpen(false)

    const handleSelect = (value: T) => {
        setSelectedValue(value)
        close()
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                close()
            }
        }
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        }
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isOpen])

    return {
        isOpen,
        selectedValue,
        dropdownRef,
        toggle,
        close,
        handleSelect,
        setSelectedValue,
    }
}
