import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="flex min-h-screen flex-col bg-color-bg bg-image-main-pattern bg-fixed bg-repeat antialiased">
            <header className="flex w-full justify-between px-16 py-12">
                <div></div>
                <nav>
                    <button className="flex items-center rounded-lg px-4 py-2 font-inter text-body-s text-color-text transition-all duration-200 hover:bg-color-text hover:text-color-surface active:scale-95">
                        <span>Sign in</span>
                        <span className="mb-1">→</span>
                    </button>
                </nav>
            </header>

            <main className="mx-auto w-full max-w-7xl grow p-8">
                <Outlet />
            </main>

            <footer className="flex w-full justify-center">
                <div className="flex flex-col items-center justify-center bg-color-surface/90 px-9 py-3 font-inter text-body-xs text-color-text">
                    <nav className="flex gap-1">
                        <a href="#" className="transition-colors hover:text-color-hover">
                            Email
                        </a>
                        <div>•</div>
                        <a href="#" className="transition-colors hover:text-color-hover">
                            Instagram
                        </a>
                        <div>•</div>
                        <a href="#" className="transition-colors hover:text-color-hover">
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
