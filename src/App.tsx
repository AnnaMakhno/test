import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./page/Form/Form";
import NotFound from "./page/NotFound/NotFound";
import MainLayout from "./layouts/MainLayout";
import PeopleList from "./page/PeopleList/PeopleList";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<MainLayout />}
                >
                    <Route
                        index
                        element={<Form />}
                    />
                    <Route
                        path="list"
                        element={<PeopleList />}
                    />
                    <Route
                        path="*"
                        element={<NotFound />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
