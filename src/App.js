import React, { useEffect, useState } from 'react'
import Issues from './components/Issues/Issues'
import Loading from './components/Loading/Loading'
import Searchbar from './components/Searchbar/Searchbar'
import Welcome from './components/Welcome/Welcome'
import fetchData from './utils/fetchData'
import normalizeData from './utils/normalizeData'

async function searchIssues(query, setIssues, setIsLoading) {
  setIsLoading(true)
  const data = await fetchData(query)
  const fetchedIssues = normalizeData(data)
  setIsLoading(false)
  setIssues(fetchedIssues)
}

const App = () => {
  const [issues, setIssues] = useState(undefined)
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!query) {
      setIssues([])
      return
    }

    // Only fetch when user stops typing
    const delayDebounceFn = setTimeout(() => {
      searchIssues(query, setIssues, setIsLoading)
    }, 700)

    return () => clearTimeout(delayDebounceFn)
  }, [query])

  let screen

  if (typeof issues === 'undefined' || issues.length < 1) {
    screen = <Welcome />
  } else {
    screen = <Issues issues={issues} query={query} />
  }

  return (
    <div className="grid-container">
      <header>
        <Searchbar query={query} setQuery={setQuery} />
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
