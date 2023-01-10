import { useState } from "react"
import { StyledRegisterVideo } from "./style"
import { createClient } from "@supabase/supabase-js"

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

const PROJEXT_URL = "https://pdufmujcdvkrixflycfq.supabase.co"
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkdWZtdWpjZHZrcml4Zmx5Y2ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1MDgxNzAsImV4cCI6MTk4NDA4NDE3MH0.NgZQjB_sBVFH-Hmx5QR-63V0juQzhiJyEqgAiSGlKCk"

const supabase = createClient(PROJEXT_URL, API_KEY)

function RegisterVideo() {
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

            supabase
              .from("playlist")
              .insert({
                title: registerForm.values.title,
                url: registerForm.values.url,
                thumb: registerForm.values.thumb,
                playlist: registerForm.values.playlist,
              })
              .then((e) => {
                console.log(e)
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
