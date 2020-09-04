import React, { useEffect, useState } from 'react'
import Issues from './components/Issues'
import Loading from './components/Loading'
import Searchbar from './components/Searchbar'
import Welcome from './components/Welcome'
import normalizeData from './utils/normalizeData'

function App() {
  const [issues, setIssues] = useState(undefined)
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!query) {
      setIssues([])
      return
    }
    const delayDebounceFn = setTimeout(() => {
      console.log(query)
      normalizeData(query, setIssues, setIsLoading)
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [query])

  let screen

  if (typeof issues === 'undefined' || issues.length < 1) {
    screen = <Welcome />
  } else {
    screen = <Issues issues={issues} />
  }

  return (
    <div className="grid-container">
      <header>
        <Searchbar query={query} setQuery={setQuery} setIssues={setIssues} />
      </header>
      <main>
        <div className="content">
          <div className="main">{isLoading ? <Loading /> : screen}</div>
        </div>
      </main>
      <footer>React's got issues.</footer>
    </div>
  )
}

export default App
