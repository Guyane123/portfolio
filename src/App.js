import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
