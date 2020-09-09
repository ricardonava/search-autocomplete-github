import React, { Suspense, useState } from 'react'
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Issues/Issues' was resolved t... Remove this comment to see the full error message
import Issues from './components/Issues/Issues'
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Loading/Loading' was resolved... Remove this comment to see the full error message
import Loading from './components/Loading/Loading'
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Searchbar/Searchbar' was reso... Remove this comment to see the full error message
import Searchbar from './components/Searchbar/Searchbar'
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Welcome/Welcome' was resolved... Remove this comment to see the full error message
import Welcome from './components/Welcome/Welcome'
import useDebounce from './hooks/useDebounce'

const App = () => {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 700)

  let screen

  if (!debouncedQuery) {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    screen = <Welcome />
  }

  if (debouncedQuery) {
    screen = (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Issues debouncedQuery={debouncedQuery} />
      </Suspense>
    )
  }

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="grid-container">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <header>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Searchbar query={query} setQuery={setQuery} />
      </header>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <main>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="content">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className="main">{screen}</div>
        </div>
      </main>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <footer>React's got issues.</footer>
    </div>
  )
}

export default App
