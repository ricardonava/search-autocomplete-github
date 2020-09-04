import React, { useEffect, useState } from 'react'
import Issues from './components/Issues'
import Searchbar from './components/Searchbar'
import fetchData from './utils/fetchData'

function App() {
  const [issues, setIssues] = useState(undefined)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(query)
      fetchData(query, setIssues)
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [query])

  return (
    <div className="grid-container">
      <header>
        <Searchbar
          query={query}
          setQuery={setQuery}
          setIssues={setIssues}
          fetchData={fetchData}
        />
      </header>
      <main>
        <div className="content">
          <div className="main">
            {typeof issues === 'undefined' || issues.length < 1 ? (
              <h1>Search issues...</h1>
            ) : (
              <Issues issues={issues} />
            )}
          </div>
        </div>
      </main>
      <footer>React's got issues.</footer>
    </div>
  )
}

export default App
