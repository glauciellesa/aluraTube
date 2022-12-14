import styled from "styled-components"
import React, { useContext } from "react"
import { FilterContext } from "../../contexts/FilterContext"

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.borderBase || "red"};
  max-width: 425px;
  width: 100%;
  border-radius: 30px;
  overflow: hidden;

  input {
    width: 80%;
    padding: 4px 10px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textColorBase || "red"};
    background-color: ${({ theme }) => theme.backgroundLevel1 || "red"};
  }

  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.backgroundLevel2 || "red"};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({ theme }) => theme.borderBase || "red"};
    width: 40px;
    height: 40px;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`

function Search() {
  const { filterValue, setFilter } = useContext(FilterContext)

  return (
    <StyledSearch>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setFilter(e.target.value)}
        value={filterValue}
      />

      <button>🔎</button>
    </StyledSearch>
  )
}

export default Search
