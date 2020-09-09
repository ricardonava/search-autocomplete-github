import React, { lazy, Suspense, useState } from 'react'
import Loading from './components/Loading/Loading'
import Searchbar from './components/Searchbar/Searchbar'
import Welcome from './components/Welcome/Welcome'
import useDebounce from './hooks/useDebounce'

const Issues = lazy(() => import('./components/Issues/Issues'))

const App = () => {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 700)

  let main

  if (!debouncedQuery) {

    main = <Welcome />
  }

  if (debouncedQuery) {
    main = (

      <Suspense
        fallback={

          <>

            <Loading query={query}>

              <h1>Searching issues that match "{query}"...</h1>
            </Loading>
          </>
        }
      >

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

          <div className="main">{main}</div>
        </div>
      </main>

      <footer>React's got issues.</footer>
    </div>
  )
}

export default App
