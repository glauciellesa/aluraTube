import React from "react"
import config from "../config.json"
import CSSReset from "../src/components/CSSReset"
import Menu from "../src/components/Menu/index"
import Banner from "../src/components/Banner"
import Header from "../src/components/Header"
import Timeline from "../src/components/Timeline"
import Favorites from "../src/components/Favorites"

function HomePage() {
  const [filterValue, setfilter] = React.useState("")

  return (
    <>
      <CSSReset />
      <div>
        {/* Prop Drilling */}
        <Menu filterValue={filterValue} setfilter={setfilter} />
        <Banner />
        <Header />
        <Timeline searchValue={filterValue} playlists={config.playlists}>
          Conteúdo
        </Timeline>
        <Favorites favorites={config.favorites} />
      </div>
    </>
  )
}

export default HomePage
