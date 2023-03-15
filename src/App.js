import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Competences from "./pages/Competences";
import Footer from "./Footer";
import GoUp from "./GoUp";
import React from "react";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="skills" element={<Competences />} />
            </Routes>
            <GoUp />
            <Footer />
        </div>
    );
}

export default App;
