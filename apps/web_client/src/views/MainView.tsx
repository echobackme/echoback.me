import { useSearchParams } from "react-router-dom"

export const MainView = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    // TODO []: Use custom hook for this function and handleClose as well
    const handleOpen = () => {
        const params = new URLSearchParams(searchParams)
        params.append("modal", "compose") // TODO []: Use mapping for these literals
        setSearchParams(params)
    }

    return (
        <div className="flex flex-col items-center">
            <section className="flex max-w-3xl flex-col items-center text-center">
                <h1 className="mt-4 font-playfair text-header-h1 text-color-header">Напиши себе в будущее</h1>

                <p className="mb-10 mt-4 font-rubik text-body-m text-color-caption">
                    Сохрани себя в моменте. <br />
                    Ты пишешь сейчас — услышишь позже.
                </p>

                <button
                    onClick={handleOpen}
                    className="flex items-center rounded-lg bg-color-text px-4 py-2 font-inter text-body-s-strong text-color-surface transition-all duration-200 hover:bg-color-surface hover:text-color-text active:scale-95"
                >
                    Написать письмо
                </button>
            </section>

            <section className="pt-20">{/*<HowItWorks />*/}</section>
        </div>
    )
}
