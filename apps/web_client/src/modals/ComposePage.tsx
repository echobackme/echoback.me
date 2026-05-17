import { Button } from "~/components/Button"
import { Field } from "~/components/Field"
import { Input } from "~/components/Input"
import { Textarea } from "~/components/Textarea"

const ComposePage = () => {
    return (
        <section className="flex flex-col gap-8 p-6 sm:p-8">
            <div className="pr-12">
                <p className="font-inter text-body-xs text-color-caption">Новое письмо</p>
                <h2 className="mt-2 font-playfair text-header-h2 text-color-header">Напиши себе в будущее</h2>
                <p className="mt-3 max-w-xl font-rubik text-body-s text-color-caption">
                    Сохрани мысль, состояние или обещание себе. Письмо вернётся в выбранный день.
                </p>
            </div>

            <form className="flex flex-col gap-5" onSubmit={(event) => event.preventDefault()}>
                <Field id="compose-email" label="Email">
                    <Input id="compose-email" type="email" placeholder="you@example.com" autoComplete="email" />
                </Field>

                <Field id="compose-subject" label="Тема">
                    <Input id="compose-subject" placeholder="Что важно запомнить" />
                </Field>

                <Field id="compose-date" label="Дата отправки">
                    <Input id="compose-date" type="date" />
                </Field>

                <Field id="compose-message" label="Письмо">
                    <Textarea id="compose-message" rows={8} placeholder="Напиши себе то, что не хочешь потерять." />
                </Field>

                <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                    <Button variant="ghost">Сохранить черновик</Button>
                    <Button type="submit">Запланировать письмо</Button>
                </div>
            </form>
        </section>
    )
}

export default ComposePage
