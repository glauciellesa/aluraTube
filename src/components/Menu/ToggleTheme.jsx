import React, { useContext } from "react"
import { MyThemeContext } from "../../contexts/ThemeContext"
import styled from "styled-components"

const StyledToggle = styled.div`
  background-color: #333333;
  border: 0;
  padding: 3px;
  font-size: 12px;
  width: 50px;
  height: 25px;
  display: flex;
  justify-content: space-around;
  border-radius: 10000px;
  position: relative;
  label {
    width: 40px;
  }
  span {
    display: inline-flex;
    width: 20px;
    height: 20px;
    align-items: center;
    justify-content: center;
  }

  label:before {
    content: "";
    background-color: #fafafa;
    border: 1px solid #333333;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    transition: 0.3s;
    cursor: pointer;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"]:checked + label:before {
    transform: translateX(100%);
  }
`

function ToggleTheme() {
  const { theme, setTheme } = useContext(MyThemeContext)

  const toggleTheme = () => {
    if (theme == "light") {
      setTheme("dark")
      localStorage.setItem("theme", "dark")
    } else {
      setTheme("light")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <StyledToggle>
      <input onClick={toggleTheme} type="checkbox" id="darkmode" />
      <label htmlFor="darkmode" className="darkmode-switch">
        <span>🌙</span>
        <span>☀️</span>
      </label>
    </StyledToggle>
  )
}

export default ToggleTheme
