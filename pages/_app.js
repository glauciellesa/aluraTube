import MyThemeProvider from "../src/contexts/ThemeContext"
import { GlobalStyles } from "../src/themes/ThemeConfig"
import CSSReset from "../src/themes/CSSReset"
import RegisterVideo from "../src/components/RegisterVideo"

export default function MyApp({ Component, pageProps }) {
  return (
    <MyThemeProvider>
      <GlobalStyles />
      <CSSReset />
      <Component {...pageProps} />
      <RegisterVideo />
    </MyThemeProvider>
  )
}
