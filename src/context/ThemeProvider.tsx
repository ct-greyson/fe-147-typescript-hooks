import React from 'react'
import { useThemeContext } from './ThemeContext'
useThemeContext

const ThemeProvider = () => {
    const { theme, toggleTheme } = useThemeContext();
  return (
    <div>
        <p>Current Theme: {theme}</p>
        <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}

export default ThemeProvider