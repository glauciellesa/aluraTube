import { createContext, useState } from "react"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../components/ThemeConfig"

export const MyThemeContext = createContext()

const MyThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")
  return (
    <MyThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </MyThemeContext.Provider>
  )
}

export default MyThemeProvider
