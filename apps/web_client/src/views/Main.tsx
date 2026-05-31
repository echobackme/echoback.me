import { t } from "@lingui/core/macro"

import Button from "~/components/Button"
import { useModal } from "~/components/Modal"
import { formatL10n } from "~/i18n"
import { MODAL } from "~/routes"

export default function Main() {
    const { openModal } = useModal()

    const handleComposeOpen = () => {
        openModal(MODAL.COMPOSE)
    }

    return (
        <div className="flex flex-col items-center">
            <section className="flex flex-col items-center">
                <h1 className="mt-4 font-playfair text-h1 text-color-content-primary">
                    {t({ id: "l10n.main.hero.title", message: "Напиши себе в будущее" })}
                </h1>

                <p className="mb-20 mt-6 text-left font-inter text-h4 text-color-content-tertiary">
                    {formatL10n(
                        t({
                            id: "l10n.main.hero.subtitle",
                            message: "Сохрани себе в моменте.<br>Ты пишешь сейчас — услышишь позже.",
                        }),
                        {
                            br: <br />,
                        },
                    )}
                </p>

                <Button onClick={handleComposeOpen} className="px-8 py-5">
                    {t({ id: "l10n.main.hero.cta", message: "Написать письмо" })}
                </Button>
            </section>

            <section className="mt-12 flex w-full min-w-fit flex-col items-center rounded-b-xl p-24 pt-12 shadow-section">
                <h2 className="font-playfair text-h2 text-color-content-primary/45">
                    {t({ id: "l10n.main.how_it_works.title", message: "Как работает Echo?" })}
                </h2>
                <div className="mt-20 flex h-44 w-full min-w-fit flex-row gap-8 whitespace-nowrap">
                    <div className="flex shrink-0 grow basis-1/3 flex-col items-center rounded-md px-4 pt-12 shadow-card">
                        <div>
                            <div></div>
                            <h3 className="font-playfair text-body-l text-color-content-primary">
                                {t({ id: "l10n.main.how_it_works.step1.title", message: "Напишите себе письмо" })}
                            </h3>
                        </div>
                        <p className="mt-2 font-inter text-body-m text-color-content-tertiary">
                            {t({
                                id: "l10n.main.how_it_works.step1.description",
                                message: "Расскажите о том, что важно",
                            })}
                        </p>
                    </div>
                    <div className="flex shrink-0 grow basis-1/3 flex-col items-center rounded-md px-4 pt-12 shadow-card">
                        <div>
                            <div></div>
                            <h3 className="font-playfair text-body-l text-color-content-primary">
                                {t({ id: "l10n.main.how_it_works.step2.title", message: "Выбери дату возврата" })}
                            </h3>
                        </div>
                        <p className="mt-2 font-inter text-body-m text-color-content-tertiary">
                            {t({
                                id: "l10n.main.how_it_works.step2.description",
                                message: "Echo вернётся в нужный момент",
                            })}
                        </p>
                    </div>
                    <div className="flex shrink-0 grow basis-1/3 flex-col items-center rounded-md px-4 pt-12 shadow-card">
                        <div>
                            <div></div>
                            <h3 className="font-playfair text-body-l text-color-content-primary">
                                {t({ id: "l10n.main.how_it_works.step3.title", message: "Получи свой отклик" })}
                            </h3>
                        </div>
                        <p className="mt-2 font-inter text-body-m text-color-content-tertiary">
                            {t({
                                id: "l10n.main.how_it_works.step3.description",
                                message: "Ты увидишь себя с другой стороны",
                            })}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
