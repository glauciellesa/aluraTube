import React, { useState } from "react"
import config from "../config.json"
import CSSReset from "../src/components/CSSReset"
import Menu from "../src/components/Menu/index"
import Header from "../src/components/Header"
import Timeline from "../src/components/Timeline"
import Favorites from "../src/components/Favorites"
import { GlobalStyles } from "../src/components/ThemeConfig"

import MyThemeProvider from "../src/contexts/ThemeContext"
import FilterProvider from "../src/contexts/FilterContext"

function HomePage() {
  return (
    <MyThemeProvider>
      <GlobalStyles />
      <CSSReset />
      <div>
        <FilterProvider>
          <Menu />
          <Header />
          <Timeline playlists={config.playlists}>Conteúdo</Timeline>
        </FilterProvider>
        <Favorites favorites={config.favorites} />
      </div>
    </MyThemeProvider>
  )
}

export default HomePage
