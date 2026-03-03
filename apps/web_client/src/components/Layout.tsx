import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="flex min-h-screen flex-col bg-color-bg bg-image-main-pattern bg-fixed bg-repeat antialiased">
            <main className="mx-auto w-full max-w-7xl grow p-8">
                <Outlet />
            </main>

            <footer className="flex w-full justify-center">
                <div className="flex flex-col items-center justify-center bg-color-surface/90 px-9 py-3 font-inter text-size-xs font-normal tracking-normal text-color-text">
                    <nav className="flex gap-1 text-sm font-medium">
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
