import { BrowserRouter, Route, Routes } from "react-router-dom"

import Layout from "~/components/Layout"
import Modal from "~/components/Modal"
import ComposePage from "~/modals/ComposePage"
import { MODAL, ROUTE } from "~/routes"
import Main from "~/views/Main"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={ROUTE.MAIN} element={<Main />} />
                </Route>
            </Routes>

            <Modal name={MODAL.COMPOSE}>
                <ComposePage />
            </Modal>
        </BrowserRouter>
    )
}

export default App
