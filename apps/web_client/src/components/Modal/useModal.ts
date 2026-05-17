import { useCallback } from "react"
import { useSearchParams } from "react-router-dom"

import { SEARCH_PARAM } from "./consts"

export const useModal = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const openModal = useCallback(
        (name: string) => {
            const params = new URLSearchParams(searchParams)
            params.set(SEARCH_PARAM.MODAL, name)
            setSearchParams(params)
        },
        [searchParams, setSearchParams],
    )

    const closeModal = useCallback(() => {
        const params = new URLSearchParams(searchParams)
        params.delete(SEARCH_PARAM.MODAL)
        setSearchParams(params)
    }, [searchParams, setSearchParams])

    const activeModal = searchParams.get(SEARCH_PARAM.MODAL)

    return {
        openModal,
        closeModal,
        activeModal,
    }
}
