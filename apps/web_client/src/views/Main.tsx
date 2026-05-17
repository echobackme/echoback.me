import { Button } from "~/components/Button"
import { useModal } from "~/components/Modal"
import { MODAL } from "~/routes"

const Main = () => {
    const { openModal } = useModal()

    const handleOpen = () => {
        openModal(MODAL.COMPOSE)
    }

    return (
        <div className="flex flex-col items-center">
            <section className="flex flex-col items-center">
                <h1 className="mt-4 font-playfair text-header-h1 text-color-header">Напиши себе в будущее</h1>

                <p className="mb-20 mt-6 text-left font-rubik text-body-m text-color-caption">
                    Сохрани себя в моменте. <br />
                    Ты пишешь сейчас — услышишь позже.
                </p>

                <Button onClick={handleOpen} className="px-8 py-5">
                    Написать письмо
                </Button>
            </section>

            <section className="mt-12 flex w-full min-w-fit flex-col items-center rounded-b-section p-24 pt-12 shadow-section">
                <h2 className="font-playfair text-header-h2 text-color-text/45">Как работает Echo?</h2>
                <div className="mt-20 flex h-44 w-full min-w-fit flex-row gap-8 whitespace-nowrap">
                    <div className="flex shrink-0 grow basis-1/3 flex-col items-center rounded-card px-4 pt-12 shadow-card">
                        <div>
                            <div></div>
                            <h3 className="font-playfair text-header-h3 text-color-header">Напишите себе письмо</h3>
                        </div>
                        <p className="mt-2 font-rubik text-body-s text-color-caption">Расскажите о том, что важно</p>
                    </div>
                    <div className="flex shrink-0 grow basis-1/3 flex-col items-center rounded-card px-4 pt-12 shadow-card">
                        <div>
                            <div></div>
                            <h3 className="font-playfair text-header-h3 text-color-header">Выбери дату возврата</h3>
                        </div>
                        <p className="mt-2 font-rubik text-body-s text-color-caption">Echo вернётся в нужный момент</p>
                    </div>
                    <div className="flex shrink-0 grow basis-1/3 flex-col items-center rounded-card px-4 pt-12 shadow-card">
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

export default Main
