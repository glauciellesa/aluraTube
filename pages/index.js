import React, { useEffect, useState } from "react"
import config from "../config.json"
import Menu from "../src/components/Menu/index"
import Header from "../src/components/Header"
import Timeline from "../src/components/Timeline"
import Favorites from "../src/components/Favorites"
import FilterProvider from "../src/contexts/FilterContext"

import { videoService } from "../src/services/playlistService"

function HomePage() {
  const service = videoService()
  const [playlists, setPlaylists] = useState({}) /* config.playlist */

  useEffect(() => {
    service
      .getAllVideos()
      .then((dados) => {
        const newPlaylists = {}
        dados.data.forEach((video) => {
          if (!newPlaylists[video.playlist]) {
            newPlaylists[video.playlist] = []
          }
          newPlaylists[video.playlist] = [
            video,
            ...newPlaylists[video.playlist],
          ]
        })
        setPlaylists(newPlaylists)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div>
      <FilterProvider>
        <Menu />
        <Header />
        <Timeline playlists={playlists}>Conteúdo</Timeline>
      </FilterProvider>
      <Favorites favorites={config.favorites} />{" "}
      {/* FAzer uma verificação para adicionar os canais mais recorrentes como favorito */}
    </div>
  )
}

export default HomePage
