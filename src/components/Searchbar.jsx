import React from "react";

export default function Searchbar({ query, setQuery }) {
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <div>
      <input type="text" value={query} onChange={handleChange} />
    </div>
  );
}
