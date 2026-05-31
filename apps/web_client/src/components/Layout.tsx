import { t } from "@lingui/core/macro"
import { Outlet } from "react-router-dom"

import Button from "~/components/Button"
import Dropdown, { type DropdownOption } from "~/components/Dropdown"
import { currentLocale, isMultiLocale, type L10nLocale, locales } from "~/i18n"

const Layout = () => {
    const langOptions: DropdownOption<L10nLocale>[] = locales.map((val) => ({
        value: val,
        label: val.toUpperCase(),
        selected: val === currentLocale,
    }))

    const handleLocaleChange = (newLocale: L10nLocale) => {
        if (newLocale !== currentLocale) {
            // In a real static setup, this redirects to the new language folder
            // e.g. /ru/compose -> /en/compose
            window.location.href = `/${newLocale}/`
        }
    }

    return (
        <div className="flex min-h-screen min-w-fit flex-col bg-color-bg-base bg-image-main-pattern bg-fixed bg-repeat antialiased">
            <header className="mx-auto flex w-full min-w-fit max-w-7xl justify-between px-6 py-12 md:px-16">
                <div></div>
                <nav className="flex items-center gap-4">
                    {isMultiLocale && (
                        <Dropdown initialValue={currentLocale} options={langOptions} onChange={handleLocaleChange} />
                    )}
                    <Button variant="ghost" className="flex items-center gap-1">
                        <span>{t({ id: "l10n.auth.login", message: "Войти" })}</span>
                        <span className="mb-1">→</span>
                    </Button>
                </nav>
            </header>

            <main className="mx-auto w-full min-w-fit max-w-7xl grow p-8">
                <Outlet />
            </main>

            <footer className="flex w-full min-w-fit justify-center">
                <div className="flex flex-col items-center justify-center bg-color-bg-surface/90 px-9 py-3 font-inter text-body-xs text-color-content-secondary">
                    <nav className="flex gap-1">
                        <a href="#" className="transition-colors hover:text-color-hover-secondary">
                            {t({ id: "l10n.footer.email", message: "Email" })}
                        </a>
                        <div>•</div>
                        <a href="#" className="transition-colors hover:text-color-hover-secondary">
                            {t({ id: "l10n.footer.instagram", message: "Instagram" })}
                        </a>
                        <div>•</div>
                        <a href="#" className="transition-colors hover:text-color-hover-secondary">
                            {t({ id: "l10n.footer.support", message: "Support" })}
                        </a>
                    </nav>
                    <p className="mt-1">
                        © EchoBack, {new Date().getFullYear()} -{" "}
                        {t({ id: "l10n.footer.tagline", message: "Hear Yourself Later" })}
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Layout
