import React, { useState } from "react"
import config from "../config.json"
import CSSReset from "../src/components/CSSReset"
import Menu from "../src/components/Menu/index"
import Header from "../src/components/Header"
import Timeline from "../src/components/Timeline"
import Favorites from "../src/components/Favorites"
import { GlobalStyles } from "../src/components/ThemeConfig"

import MyThemeProvider from "../src/contexts/ThemeContext"

function HomePage() {
  const [filterValue, setfilter] = useState("")

  return (
    <MyThemeProvider>
      <GlobalStyles />
      <CSSReset />
      <div>
        {/* Prop Drilling */}
        <Menu filterValue={filterValue} setfilter={setfilter} />
        <Header />
        <Timeline searchValue={filterValue} playlists={config.playlists}>
          Conteúdo
        </Timeline>
        <Favorites favorites={config.favorites} />
      </div>
    </MyThemeProvider>
  )
}

export default HomePage
