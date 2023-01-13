import { useContext, useState } from "react"
import styled from "styled-components"
import { FilterContext } from "../contexts/FilterContext"
import playlistService from "../services/playlistService"
import RegisterVideo from "./RegisterVideo"

const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  .containerPlaylists {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    .videos {
      width: calc(100vw - 16px * 4);
      padding-bottom: 30px;
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

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    max-width: 210px;
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    height: auto;
  }
  .divRemoveVideo {
    display: flex;
    justify-content: flex-end;
  }

  .removeVideo {
    position: absolute;
    right: 0;
    width: 20px;
    height: 20px;
    font-size: 20px;
    border: 0;
    background-color: #ea0909;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    cursor: pointer;

    :hover {
      background-color: red;
      align-items: center;
      width: 40px;
      height: 40px;
    }
  }
  .cardVideo {
    position: relative;
    width: fit-content;
  }

  @media (min-width: 600px) {
    img {
    }
  }
`

function Timeline(props) {
  const { filterValue } = useContext(FilterContext)
  const playlistNames = Object.keys(props.playlists)

  const removeAction = (id, playlist) => {
    if (confirm("Are you sure to do this?")) {
      remove(id, playlist)
    }
  }

  const remove = (id, playlist) => {
    playlistService.removeVideo(id).then((data) => {
      const newPlaylist = props.playlists[playlist].filter((elem) => {
        return elem.id !== id
      })
      props.setPlaylists({ ...props.playlists, [playlist]: newPlaylist })
    })
  }

  //Statement
  //Retorno por expressão
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName]

        return (
          <section key={playlistName} className="containerPlaylists">
            <h2>{playlistName}</h2>
            <div className="videos">
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase()
                  const searchValueNormalized = filterValue.toLowerCase()
                  return titleNormalized.includes(searchValueNormalized)
                })
                .map((video) => {
                  return (
                    <div key={video.url} className="cardVideo">
                      <button
                        className="removeVideo"
                        onClick={() => removeAction(video.id, video.playlist)}
                      >
                        x
                      </button>
                      <a href={video.url}>
                        <img src={video.thumb} />
                        <span>{video.title}</span>
                      </a>
                    </div>
                  )
                })}
            </div>
          </section>
        )
      })}

      <RegisterVideo {...props} />
    </StyledTimeline>
  )
}

export default Timeline
