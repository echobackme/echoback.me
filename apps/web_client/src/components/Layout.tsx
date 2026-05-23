import { Outlet } from "react-router-dom"

import { Button } from "~/components/Button"

const Layout = () => {
    return (
        <div className="flex min-h-screen min-w-fit flex-col bg-color-bg-base bg-image-main-pattern bg-fixed bg-repeat antialiased">
            <header className="mx-auto flex w-full min-w-fit max-w-7xl justify-between px-16 py-12">
                <div></div>
                <nav>
                    <Button variant="ghost" className="flex items-center gap-1">
                        <span>Войти</span>
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
                            Email
                        </a>
                        <div>•</div>
                        <a href="#" className="transition-colors hover:text-color-hover-secondary">
                            Instagram
                        </a>
                        <div>•</div>
                        <a href="#" className="transition-colors hover:text-color-hover-secondary">
                            Support
                        </a>
                    </nav>
                    <p className="mt-1">© EchoBack, {new Date().getFullYear()} - Hear Yourself Later</p>
                </div>
            </footer>
        </div>
    )
}

export default Layout
