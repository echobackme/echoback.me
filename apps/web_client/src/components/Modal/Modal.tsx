import { type ReactNode, useEffect, useRef } from "react"
import { createPortal } from "react-dom"

import { Button } from "~/components/Button"

import { useModal } from "./useModal"

type ModalProps = {
    name: string
    children: ReactNode
    ariaLabelledBy?: string
    ariaDescribedBy?: string
}

const Modal = ({ name, children, ariaLabelledBy, ariaDescribedBy }: ModalProps) => {
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
            className="fixed inset-0 z-modal flex min-h-screen items-center justify-center bg-color-bg-overlay/65 px-4 py-6"
        >
            <div ref={modalRef} className="shadow-modal relative w-full max-w-2xl rounded-lg bg-color-bg-base">
                <div className="absolute right-4 top-4">
                    <Button variant="ghost" className="p-2" aria-label="Закрыть модальное окно" onClick={closeModal}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </Button>
                </div>

                {children}
            </div>
        </div>,
        modalRoot,
    )
}

export default Modal
