
import { Routes, Route } from "react-router-dom";
import ThemeContext from "./modules/Context/ThemeContext"
import Contact from "./pages/Contact";
import Home from './pages/Home'
import NavBar from "./modules/Navbar";
import ToTop from "./modules/ToTop";
import {useState } from "react";

function App() {

    const [theme, setTheme] = useState("dark")

    
    const handleThemeChange = function () {
        if (theme === "dark") {
            setTheme("light")
        } else if (theme === "light") {
            setTheme("dark")
        } else {
            throw new Error("Erreur, je ne connais pas ce context")
        }
        document.body.classList.toggle("body-light")
    }

    return (
       <ThemeContext.Provider value={{theme, handleThemeChange}}>
            <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
                <ToTop />
            </div>
       </ThemeContext.Provider> 
    );
}

export default App;

