import { Link, Outlet } from "react-router-dom"

import { ROUTES } from "~/routes"

const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="h-16 bg-white border-b flex items-center px-8 gap-6">
                <Link to={ROUTES.HOME} className="font-bold text-indigo-600">
                    ECHOBACK
                </Link>
                <Link to={ROUTES.HOME} className="text-sm hover:text-indigo-600">
                    Home
                </Link>
                <Link to={ROUTES.MESSAGE.COMPOSE} className="text-sm hover:text-indigo-600">
                    Compose
                </Link>
            </nav>

            <main className="p-8">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
