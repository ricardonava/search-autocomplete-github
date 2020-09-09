import React from 'react'
import './searchbar.css'

const Searchbar = ({
  query,
  setQuery
}: any) => {
  const handleChange = (event: any) => {
    setQuery(event.target.value)
  }
  return (
    <div className="search">
      <input
        type="text"
        className="searchTerm"
        placeholder="Search OPEN React issues..."
        value={query}
        onChange={handleChange}
      />
    </div>
  )
}

export default Searchbar
