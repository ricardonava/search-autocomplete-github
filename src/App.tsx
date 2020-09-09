import React, { Suspense, useState } from 'react'
import Issues from './components/Issues/Issues'
import Loading from './components/Loading/Loading'
import Searchbar from './components/Searchbar/Searchbar'
import Welcome from './components/Welcome/Welcome'
import useDebounce from './hooks/useDebounce'

const App = () => {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 700)

  let screen

  if (!debouncedQuery) {
    screen = <Welcome />
  }

  if (debouncedQuery) {
    screen = (
      <Suspense fallback={<Loading />}>
        <Issues debouncedQuery={debouncedQuery} />
      </Suspense>
    )
  }

  return (
    <div className="grid-container">
      <header>
        <Searchbar query={query} setQuery={setQuery} />
      </header>
      <main>
        <div className="content">
          <div className="main">{screen}</div>
        </div>
      </main>
      <footer>React's got issues.</footer>
    </div>
  )
}

export default App
