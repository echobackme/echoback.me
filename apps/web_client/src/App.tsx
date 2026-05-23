import { BrowserRouter, Route, Routes } from "react-router-dom"

import Layout from "~/components/Layout"
import Modal from "~/components/Modal"
import ComposePage, { COMPOSE_MODAL_ARIA } from "~/modals/ComposePage"
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

            <Modal
                name={MODAL.COMPOSE}
                ariaLabelledBy={COMPOSE_MODAL_ARIA.TITLE}
                ariaDescribedBy={COMPOSE_MODAL_ARIA.DESCRIPTION}
            >
                <ComposePage />
            </Modal>
        </BrowserRouter>
    )
}

export default App
