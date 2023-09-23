import { BrowserRouter, Route, Routes } from "react-router-dom";
import Links from "./pages/Links.jsx";
import Episodes from "./pages/Episodes/Episodes.jsx";
import '../src/css/App.scss';
import Character from "./pages/Characters/Character.jsx";
import Home from "./pages/Characters/Home.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Links />} />
                <Route path={'/characters'} element={<Home/>}/>
                <Route path={'/characters/:id'} element={<Character />} />
                <Route path={'/episodes'} element={<Episodes />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
