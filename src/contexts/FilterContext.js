import { createContext, useState } from "react"

export const FilterContext = createContext()

const FilterProvider = ({ children }) => {
  const [filterValue, setFilter] = useState("")
  return (
    <FilterContext.Provider value={{ filterValue, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export default FilterProvider
