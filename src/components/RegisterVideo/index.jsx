import { useState } from "react"
import { StyledRegisterVideo } from "./style"

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
              thumb: `https://img.youtube.com/vi/${youTubeGetID(
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
function youTubeGetID(url) {
  const regExp = /v=([^#&?]*)$/
  const match = regExp.exec(url)?.at(1)
  return match
}

function RegisterVideo() {
  const registerForm = useForm({
    initialValues: {
      title: "",
      url: "",
      thumb: "",
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
            console.log(registerForm.values)
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
              name="url"
              onChange={registerForm.handleChange}
            ></input>
            <div className="thumbImg">
              <img
                src={`https://img.youtube.com/vi/${youTubeGetID(
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
