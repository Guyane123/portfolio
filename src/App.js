import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Compétences from "./pages/Compétences";
import Footer from "./Footer";
import GoUp from "./GoUp";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="skills" element={<Compétences />} />
            </Routes>
            <GoUp />
            <Footer />
        </div>
    );
}

export default App;
