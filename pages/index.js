import React from "react"
import config from "../config.json"

import Menu from "../src/components/Menu/index"
import Header from "../src/components/Header"
import Timeline from "../src/components/Timeline"
import Favorites from "../src/components/Favorites"

import FilterProvider from "../src/contexts/FilterContext"

function HomePage() {
  return (
    <div>
      <FilterProvider>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists}>Conteúdo</Timeline>
      </FilterProvider>
      <Favorites favorites={config.favorites} />
    </div>
  )
}

export default HomePage
