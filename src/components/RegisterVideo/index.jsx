import { useState } from "react"
import { StyledRegisterVideo } from "./style"
import playlistService from "../../services/playlistService"

function useForm(formProps) {
  const [values, setValues] = useState(formProps.initialValues)
  return {
    values,
    handleChange: (e) => {
      const value = e.target.value
      const name = e.target.name
      const thumb =
        name === "url"
          ? {
              thumb: `https://img.youtube.com/vi/${getThumbnail(
                value,
              )}/hqdefault.jpg`,
            }
          : {}
      setValues({ ...values, [name]: value, ...thumb })
    },

    clearForm: () => {
      setValues({})
    },
  }
}
function getThumbnail(url) {
  const regExp = /v=([^#&?]*)$/
  const match = regExp.exec(url)?.at(1)
  return match
}

function RegisterVideo(props) {
  const registerForm = useForm({
    initialValues: {
      title: "",
      url: "",
      thumb: "",
      playlist: "",
    },
  })

  const [formVisible, setFormVisible] = useState(false)

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisible(true)}>
        +
      </button>
      {formVisible ? (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const video = {
              title: registerForm.values.title,
              url: registerForm.values.url,
              thumb: registerForm.values.thumb,
              playlist: registerForm.values.playlist,
            }
            playlistService
              .addVideo(video)
              .then(({ data }) => {
                const newPlaylist = [
                  ...props.playlists[registerForm.values.playlist],
                  ...data,
                ]

                props.setPlaylists({
                  ...props.playlists,
                  [registerForm.values.playlist]: newPlaylist,
                })
              })
              .catch((err) => {
                console.log(err)
              })
            setFormVisible(false)
            registerForm.clearForm()
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => setFormVisible(false)}
            >
              x
            </button>
            <input
              placeholder="Video title"
              value={registerForm.values.title}
              name="title"
              onChange={registerForm.handleChange}
            ></input>
            <input
              placeholder="URL (https//youtube...)"
              value={registerForm.values.url}
              /* onblur={onBlur} */
              name="url"
              onChange={registerForm.handleChange}
            ></input>
            <select
              className="selectPlaylist"
              name="playlist"
              id="playlist"
              onChange={registerForm.handleChange}
            >
              <option value="">Select playlist</option>
              <option value="games">Games</option>
              <option value="front-end">Front-end</option>
              <option value="back-end">Back-end</option>
            </select>
            <div className="thumbImg">
              <img
                src={`https://img.youtube.com/vi/${getThumbnail(
                  registerForm.values.url,
                )}/hqdefault.jpg`}
              ></img>
            </div>
            <button type="submit"> Register </button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  )
}

export default RegisterVideo
