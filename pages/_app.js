import MyThemeProvider from "../src/contexts/ThemeContext"
import { GlobalStyles } from "../src/themes/ThemeConfig"
import CSSReset from "../src/themes/CSSReset"
import RegisterVideo from "../src/components/RegisterVideo"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

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
