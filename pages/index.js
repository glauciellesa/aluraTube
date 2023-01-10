import React, { useEffect, useState } from "react"
import config from "../config.json"
import Menu from "../src/components/Menu/index"
import Header from "../src/components/Header"
import Timeline from "../src/components/Timeline"
import Favorites from "../src/components/Favorites"
import FilterProvider from "../src/contexts/FilterContext"

import { createClient } from "@supabase/supabase-js"

const PROJEXT_URL = "https://pdufmujcdvkrixflycfq.supabase.co"
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkdWZtdWpjZHZrcml4Zmx5Y2ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1MDgxNzAsImV4cCI6MTk4NDA4NDE3MH0.NgZQjB_sBVFH-Hmx5QR-63V0juQzhiJyEqgAiSGlKCk"
const supabase = createClient(PROJEXT_URL, API_KEY)

function HomePage() {
  /* const service = videoService() */
  const [playlists, setPlaylists] = useState({}) /* config.playlist */
  useEffect(() => {
    supabase
      .from("playlist")
      .select("*")
      .then((dados) => {
        console.log("Playlist", dados.data)

        const games = dados.data.filter((elem) => elem.playlist === "games")
        const frontEnd = dados.data.filter(
          (elem) => elem.playlist === "front-end",
        )
        const backEnd = dados.data.filter(
          (elem) => elem.playlist === "back-end",
        )
        console.log("data", {
          games: games,
          "front-end": frontEnd,
          "back-end": backEnd,
        })
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
        <Timeline playlists={playlists}>Conteúdo</Timeline>
      </FilterProvider>
      <Favorites favorites={config.favorites} />
      {/* FAzer uma verificação para adicionar os canais mais recorrentes como favorito */}
    </>
  )
}

export default HomePage
