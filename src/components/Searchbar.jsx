import React from 'react'

const Searchbar = ({ query, setQuery }) => {
  const handleChange = (event) => {
    setQuery(event.target.value)
  }
  return (
    <div className="search">
      <input
        type="text"
        className="searchTerm"
        placeholder="Search React issues..."
        value={query}
        onChange={handleChange}
      />
    </div>
  )
}

export default Searchbar
