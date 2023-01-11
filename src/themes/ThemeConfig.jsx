import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  backgroundBase: "#f9f9f9",
  backgroundLevel1: "#FFFFFF",
  backgroundLevel2: "#e5e3e3",
  borderBase: "#E5E5E5",
  textColor: "#222222",
  textColorAlt: "#444343",
}

export const darkTheme = {
  backgroundBase: "#181818",
  backgroundLevel1: "#202020",
  backgroundLevel2: "#313131",
  borderBase: " #383838",
  textColor: "#e5e5e5",
  textColorAlt: "#c9c6c6",
}

export const GlobalStyles = createGlobalStyle`
        body {
          background: ${({ theme }) => theme.backgroundBase};
          color: ${({ theme }) => theme.textColor};
          font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
          transition: all 0.50s linear;
        }
      `
