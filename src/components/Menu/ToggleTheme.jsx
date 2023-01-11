import React, { useContext } from "react"
import { MyThemeContext } from "../../contexts/ThemeContext"
import styled from "styled-components"

const StyledToggle = styled.div`
  background-color: #333333;
  border: 0;
  padding: 2px;
  font-size: 10px;
  width: 32px;
  height: 16px;
  display: flex;
  justify-content: space-between;
  border-radius: 10000px;
  position: relative;

  label {
    width: 30px;
  }
  span {
    display: inline-flex;
    width: 12px;
    height: 12px;
    align-items: center;
    justify-content: space-between;
    padding-left: 2px;
  }

  label:before {
    content: "";
    background-color: #fafafa;
    border: 1px solid #333333;
    width: 14px;
    height: 14px;
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
