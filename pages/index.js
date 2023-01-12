import React, { useEffect, useState } from "react"
import config from "../config.json"
import Menu from "../src/components/Menu/index"
import Header from "../src/components/Header"
import Timeline from "../src/components/Timeline"
import Favorites from "../src/components/Favorites"
import FilterProvider from "../src/contexts/FilterContext"
import playlistService from "../src/services/playlistService"

function HomePage() {
  /* const service = videoService() */
  const [playlists, setPlaylists] = useState({}) /* config.playlist */
  useEffect(() => {
    playlistService
      .getAllVideos()
      .then((dados) => {
        const games = dados.data.filter((elem) => elem.playlist === "games")
        const frontEnd = dados.data.filter(
          (elem) => elem.playlist === "front-end",
        )
        const backEnd = dados.data.filter(
          (elem) => elem.playlist === "back-end",
        )

        setPlaylists({
          games: games,
          "front-end": frontEnd,
          "back-end": backEnd,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <FilterProvider>
        <Menu />
        <Header />
        <Timeline playlists={playlists} setPlaylists={setPlaylists}>
          Conteúdo
        </Timeline>
      </FilterProvider>
      <Favorites favorites={config.favorites} />
      {/* FAzer uma verificação para adicionar os canais mais recorrentes como favorito */}
    </>
  )
}

export default HomePage
