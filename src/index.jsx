import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

import Home from "./pages/Home";
import Game from "./pages/Game";
import Rule from "./pages/Rule";

import NoPage from "./pages/NoPage";

export default function App() {
    return (


        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="game" element={<Game />} />
                    <Route path="rule" element={<Rule />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));