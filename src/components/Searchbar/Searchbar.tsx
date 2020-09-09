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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="search">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
