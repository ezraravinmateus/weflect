import Home from "./pages/Home";
import { WaitList } from "./pages/WaitList";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/waiting-list" element={<WaitList />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
