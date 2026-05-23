import { type ReactNode, useEffect, useRef } from "react"
import { createPortal } from "react-dom"

import Button from "~/components/Button"
import Icon, { ICONS } from "~/components/Icon"

import { useModal } from "./useModal"

type ModalProps = {
    name: string
    children: ReactNode
    ariaLabelledBy?: string
    ariaDescribedBy?: string
}

export default function Modal({ name, children, ariaLabelledBy, ariaDescribedBy }: ModalProps) {
    const { activeModal, closeModal } = useModal()
    const modalRef = useRef<HTMLDivElement>(null)
    const isOpen = activeModal === name

    useEffect(() => {
        if (!isOpen) {
            return
        }

        const initialOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeModal()
                return
            }

            if (event.key === "Tab" && modalRef.current) {
                const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
                )

                if (focusableElements.length === 0) return

                const firstElement = focusableElements[0]
                const lastElement = focusableElements[focusableElements.length - 1]

                if (event.shiftKey) {
                    if (document.activeElement === firstElement) {
                        lastElement.focus()
                        event.preventDefault()
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        firstElement.focus()
                        event.preventDefault()
                    }
                }
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        // Focus first element on open
        const rafId = requestAnimationFrame(() => {
            if (modalRef.current) {
                const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
                )
                focusableElements[0]?.focus()
            }
        })

        return () => {
            document.body.style.overflow = initialOverflow
            window.removeEventListener("keydown", handleKeyDown)
            cancelAnimationFrame(rafId)
        }
    }, [closeModal, isOpen])

    const modalRoot = document.getElementById("modal")

    if (!isOpen || !modalRoot) return null

    return createPortal(
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={ariaLabelledBy}
            aria-describedby={ariaDescribedBy}
            className="fixed inset-0 z-modal overflow-y-auto bg-color-bg-overlay/65 p-4"
        >
            <div className="flex min-h-full items-center justify-center">
                <div
                    ref={modalRef}
                    className="relative w-full max-w-[45rem] overflow-hidden rounded-2xl bg-color-bg-base shadow-modal"
                >
                    <div className="absolute right-4 top-4">
                        <Button
                            variant="ghost"
                            className="p-2"
                            aria-label="Закрыть модальное окно"
                            onClick={closeModal}
                        >
                            <Icon src={ICONS.CLOSE} size={24} alt="Закрыть" />
                        </Button>
                    </div>

                    {children}
                </div>
            </div>
        </div>,
        modalRoot,
    )
}
