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
            <section className="flex flex-col items-center">
                <h1 className="mt-4 font-playfair text-header-h1 text-color-header">Напиши себе в будущее</h1>

                <p className="mb-20 mt-6 text-left font-rubik text-body-m text-color-caption">
                    Сохрани себя в моменте. <br />
                    Ты пишешь сейчас — услышишь позже.
                </p>

                <button
                    onClick={handleOpen}
                    className="flex items-center rounded-lg bg-color-text px-8 py-5 font-inter text-body-s-strong text-color-surface transition-all duration-200 hover:bg-color-surface hover:text-color-text active:scale-95"
                >
                    Написать письмо
                </button>
            </section>

            <section className="mt-12 flex w-full min-w-fit flex-col items-center rounded-b-[12px] p-24 pt-12 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                <h2 className="font-playfair text-header-h2 text-color-text/45">Как работает Echo?</h2>
                <div className="mt-20 flex h-[180px] w-full min-w-fit flex-row gap-8 whitespace-nowrap">
                    <div className="flex shrink-0 grow basis-1/3 flex-col items-center rounded-[6px] px-4 pt-12 shadow-[0_4px_12px_5px_rgba(0,0,0,0.25)]">
                        <div>
                            <div></div>
                            <h3 className="font-playfair text-header-h3 text-color-header">Напишите себе письмо</h3>
                        </div>
                        <p className="mt-2 font-rubik text-body-s text-color-caption">Расскажите о том, что важно</p>
                    </div>
                    <div className="flex shrink-0 grow basis-1/3 flex-col items-center rounded-[6px] px-4 pt-12 shadow-[0_4px_12px_5px_rgba(0,0,0,0.25)]">
                        <div>
                            <div></div>
                            <h3 className="font-playfair text-header-h3 text-color-header">Выбери дату возврата</h3>
                        </div>
                        <p className="mt-2 font-rubik text-body-s text-color-caption">Echo вернётся в нужный момент</p>
                    </div>
                    <div className="flex shrink-0 grow basis-1/3 flex-col items-center rounded-[6px] px-4 pt-12 shadow-[0_4px_12px_5px_rgba(0,0,0,0.25)]">
                        <div>
                            <div></div>
                            <h3 className="font-playfair text-header-h3 text-color-header">Получи свой отклик</h3>
                        </div>
                        <p className="mt-2 font-rubik text-body-s text-color-caption">
                            Ты увидишь себя с другой стороны
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
