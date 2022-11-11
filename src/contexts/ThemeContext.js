import { createContext, useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../themes/ThemeConfig"

export const MyThemeContext = createContext()

const MyThemeProvider = ({ children }) => {
  let currentTheme = "light"

  const [theme, setTheme] = useState(currentTheme)

  useEffect(() => {
    setTheme(localStorage.getItem("theme"))
  }, [])

  return (
    <MyThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </MyThemeContext.Provider>
  )
}

export default MyThemeProvider
