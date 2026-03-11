import { BrowserRouter, Route, Routes } from "react-router-dom"

import Layout from "~/components/Layout"
import { ROUTES } from "~/routes"
import { MainView } from "~/views/MainView"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={ROUTES.MAIN} element={<MainView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
