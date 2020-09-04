import React from 'react'

export default function Searchbar({ query, setQuery, fetchData, setIssues }) {
  const handleChange = (event) => {
    setQuery(event.target.value)
  }
  return (
    <>
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Search React issues..."
          value={query}
          onChange={handleChange}
        />
      </div>
    </>
  )
}
