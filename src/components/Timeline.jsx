import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-brands-svg-icons"
import { useContext, useState } from "react"
import styled from "styled-components"
import { FilterContext } from "../contexts/FilterContext"

const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }

  .RemoveVideo {
    width: 20px;
    height: 20px;
    font-size: 20px;
    border: 0;
    background-color: red;

    cursor: pointer;
  }

  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px, 1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        padding-bottom: 20px;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColor || "red"};
        }
      }
    }
  }
`

function Timeline(props) {
  const { filterValue } = useContext(FilterContext)
  const playlistNames = Object.keys(props.playlists)

  const removeAction = async (id) => {
    console.log("id", id)
    /* try {
    
      await supabase.from("playlist").delete().eq("id", video.id)
      props.setPlaylists(playlistNames.filter((id) => video.id != id))
    } catch (error) {
      console.log("error", error)
    } */
  }
  //Statement
  //Retorno por expressão
  return (
    <StyledTimeline>
      <div>
        {playlistNames.map((playlistName) => {
          const videos = props.playlists[playlistName]
          return (
            <section key={playlistName}>
              <h2>{playlistName}</h2>
              <div>
                {videos
                  .filter((video) => {
                    const titleNormalized = video.title.toLowerCase()
                    const searchValueNormalized = filterValue.toLowerCase()
                    return titleNormalized.includes(searchValueNormalized)
                  })
                  .map((video) => {
                    return (
                      <div key={video.url}>
                        <a href={video.url}>
                          <img src={video.thumb} />
                          <span>{video.title}</span>
                        </a>
                        <button
                          className="RemoveVideo"
                          onClick={() => removeAction(video.id)}
                        >
                          x
                        </button>
                      </div>
                    )
                  })}
              </div>
            </section>
          )
        })}
      </div>
    </StyledTimeline>
  )
}

export default Timeline
