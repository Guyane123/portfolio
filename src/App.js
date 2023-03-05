import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

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
