import { BrowserRouter, Route, Routes } from "react-router-dom"

import Layout from "~/components/Layout"
import { ROUTES } from "~/routes"

// Temporary components for testing
const HomePage = () => <div>Home Page</div>
const ComposePage = () => <div>Compose Page</div>

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={ROUTES.HOME} element={<HomePage />} />
                    <Route path={ROUTES.MESSAGE.COMPOSE} element={<ComposePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
