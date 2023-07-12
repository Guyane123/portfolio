import { createContext } from 'react'


interface ThemeContextType {
    theme: string
    handleThemeChange: () => void
}

const themeContext = createContext<ThemeContextType>(({
    theme: "light",
    handleThemeChange: () => console.log()
}))

export default themeContext