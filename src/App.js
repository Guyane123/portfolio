import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Competences from "./Competences";
import GoUp from "./GoUp";
import React from "react";
import Contact from "./pages/Contact";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="skills" element={<Competences />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
            <GoUp />
        </div>
    );
}

export default App;
