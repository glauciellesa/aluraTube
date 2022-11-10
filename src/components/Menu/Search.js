import styled from "styled-components"
import React from "react"

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.borderBase};
  max-width: 425px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;

  input {
    width: 80%;
    padding: 4px 10px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }

  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.backgroundLevel2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({ theme }) => theme.borderBase};
    width: 40px;
    height: 40px;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`

function Search({ filterValue, setfilter }) {
  const searchValue = filterValue
  const setValue = setfilter
  return (
    <StyledSearch>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setValue(e.target.value)}
        value={searchValue}
      />
      <button>🔎</button>
    </StyledSearch>
  )
}

export default Search
