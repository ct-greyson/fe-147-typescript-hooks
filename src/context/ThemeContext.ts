import { createContext, useContext } from "react";

interface ThemeContextValue {
    theme: string,
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

// makes sure we set up our context and use it in our ThemeProvider
export const useThemeContext = () => {
    const context = useContext(ThemeContext)
    if(!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider')
    }
    return context;
}

export default ThemeContext