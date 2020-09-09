import React from 'react'
import './loading.css'

const Loading = () => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div className="loading">
    {/* fallback to loading text if needed */}
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <div className="loader">Loading...</div>
  </div>
)

export default Loading
