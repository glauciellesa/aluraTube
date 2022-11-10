import React, { useContext } from "react"
import { MyThemeContext } from "../../contexts/ThemeContext"

function ToggleTheme() {
  const { theme, setTheme } = useContext(MyThemeContext)

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <div className={`DarkMode ${theme}`}>
      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  )
}

export default ToggleTheme
