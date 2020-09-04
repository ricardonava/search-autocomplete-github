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
        {/* <button
          type="submit"
          className="searchButton"
          onClick={() => fetchData(query, setIssues)}
        >
          <svg viewBox="0 0 512 512" title="search">
            <path
              fill="white"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            />
          </svg>
        </button> */}
      </div>
      {/* <div className="searchbar">
        <input type="text" value={query} onChange={handleChange} />
        <button onClick={() => fetchData(setIssues, query)}>Search</button>
      </div> */}
      {/* {!autocomplete
        ? null
        : autocomplete.map((search) => <h3>{search.title}</h3>)} */}
    </>
  )
}
