import NavBar from "./modules/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import GoUp from "./modules/GoUp";
import React from "react";
import Contact from "./pages/Contact";
import Footer from "./modules/Footer";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
            <GoUp />
            <Footer />
        </div>
    );
}

export default App;
