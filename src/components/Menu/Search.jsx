import styled from "styled-components"
import React, { useContext } from "react"
import { FilterContext } from "../../contexts/FilterContext"

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.borderBase || "red"};
  max-width: 450px;
  height: 35px;
  width: 100%;
  border-radius: 30px;
  overflow: hidden;

  input {
    width: 60%;
    padding: 4px 10px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textColor || "red"};
    background-color: ${({ theme }) => theme.backgroundLevel1 || "red"};
  }

  button {
    margin-left: 30px;
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.borderBase || "green"};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({ theme }) => theme.borderBase || "green"};
    margin-left: 80px;
    @media (max-width: 450px) {
      max-width: 250px;
      width: 100%;
      margin-left: 40px;
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
