import { useState } from "react"

import Button from "~/components/Button"
import Checkbox from "~/components/Checkbox"
import Field from "~/components/Field"
import Icon, { ICONS } from "~/components/Icon"
import Input from "~/components/Input"
import PillGroup from "~/components/PillGroup"
import SegmentedControl from "~/components/SegmentedControl"
import Textarea from "~/components/Textarea"
import Tooltip from "~/components/Tooltip"

import { COMPOSE_MODAL_ARIA } from "./consts"

type LetterType = "ordinary" | "last"

export default function ComposePage() {
    const [letterType, setLetterType] = useState<LetterType>("ordinary")
    const [selectedTime, setSelectedTime] = useState<string | number | null>(null)
    const [customDate, setCustomDate] = useState<string | null>(null)

    const timeOptions = [
        { value: 1, label: "+ 1 месяц" },
        { value: 3, label: "+ 3 месяца" },
        { value: 6, label: "+ 6 месяцев" },
    ]

    // TEMP: If custom date is picked via calendar, it appears as a selected option
    const activeTimeOptions = customDate ? [...timeOptions, { value: "custom", label: customDate }] : timeOptions

    const handleCalendarClick = () => {
        // TEMP: Placeholder for calendar logic
        const dummyDate = "24.05.2026"
        setCustomDate(dummyDate)
        setSelectedTime("custom")
    }

    return (
        <section className="flex flex-col bg-color-bg-surface-soft pb-12 pt-20">
            <header className="mb-12 flex flex-col items-center px-12 text-center">
                <div className="flex items-center gap-2">
                    <h2 id={COMPOSE_MODAL_ARIA.TITLE} className="font-playfair text-h3 text-color-content-primary">
                        Напиши себе в будущее
                    </h2>
                    <Tooltip content="письмо увидишь только ты">
                        <Icon src={ICONS.LOCK} size={24} alt="Приватное письмо" />
                    </Tooltip>
                </div>

                <p
                    id={COMPOSE_MODAL_ARIA.DESCRIPTION}
                    className="mt-10 font-inter text-body-m tracking-wider text-color-content-tertiary"
                >
                    Тестовый текст для подзаголовка
                </p>
            </header>

            <form className="flex flex-col gap-8 px-12" onSubmit={(event) => event.preventDefault()}>
                <div className="flex flex-col gap-6">
                    <Field id={COMPOSE_MODAL_ARIA.NAME} label="Имя" horizontal>
                        <Input id={COMPOSE_MODAL_ARIA.NAME} placeholder="Твое имя" className="max-w-60" />
                    </Field>

                    <Field
                        id={COMPOSE_MODAL_ARIA.EMAIL}
                        label={
                            <span>
                                Email<span className="ml-0.5 text-body-xs text-color-content-error">*</span>
                            </span>
                        }
                        horizontal
                    >
                        <Input
                            id={COMPOSE_MODAL_ARIA.EMAIL}
                            type="email"
                            placeholder="your@email.com"
                            autoComplete="email"
                            className="max-w-60"
                        />
                    </Field>
                </div>

                <Field
                    id={COMPOSE_MODAL_ARIA.DATE}
                    label={
                        <span>
                            Когда ? <span className="ml-0.5 text-body-m text-color-content-error">*</span>
                        </span>
                    }
                    horizontal
                >
                    <div className="flex items-center gap-4">
                        <PillGroup
                            name="delivery-time"
                            options={activeTimeOptions}
                            selectedValue={selectedTime}
                            onChange={(val) => {
                                setSelectedTime(val)
                                if (val !== "custom") setCustomDate(null)
                            }}
                        />
                        <Button variant="ghost" onClick={handleCalendarClick}>
                            <Icon src={ICONS.CALENDAR} size={24} alt="Выбрать дату" />
                        </Button>
                    </div>
                </Field>

                <div className="flex justify-center">
                    <SegmentedControl
                        name="letter-type"
                        options={[
                            { value: "ordinary", label: "Обычное" },
                            { value: "last", label: "Last words" },
                        ]}
                        selectedValue={letterType}
                        onChange={setLetterType}
                    />
                </div>

                <div className="relative">
                    <Textarea
                        id={COMPOSE_MODAL_ARIA.MESSAGE}
                        rows={8}
                        placeholder="Тестовый текст"
                        className="min-h-52"
                    />
                    <div className="absolute bottom-4 left-4">
                        <Button variant="ghost" className="p-1" onClick={(event) => event.preventDefault()}>
                            <Icon src={ICONS.TEMPLATES} size={24} alt="Шаблоны" />
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6">
                    <Checkbox required>Я даю согласие на отправку письма</Checkbox>

                    <Button variant="action" type="submit" className="h-16 w-80 tracking-wider text-color-bg-base">
                        Пошли в будущее
                    </Button>
                </div>
            </form>
        </section>
    )
}
