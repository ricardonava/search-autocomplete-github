import React from 'react'
import useFetchSuspense from '../../hooks/useFetchSuspense'
import contrastText from '../../utils/contrastText'
import './issues.css'

const Issues = ({
  debouncedQuery
}: any) => {
  const url = `https://api.github.com/search/issues?q=${debouncedQuery}+in:title+repo:facebook/react+state:open&per_page=100`
  const data = useFetchSuspense(url)
  const { items: issues, total_count: count, message: errorMessage } = data

  if (errorMessage) {
    const message = errorMessage.replace(/ .*/, '')
    if (message === 'API') {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      return <h1>Hey speedy hold on, your searching to fast!!</h1>
    }
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <h1>Unknown error please try again.</h1>
  }

  if (count === 0) {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <h1>No issues found that match "{debouncedQuery}"</h1>
  }

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="issues">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="issues-title">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <h1>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          Last {issues.length !== 1 && issues.length} <span>OPEN</span>{' '}
          {issues.length > 1 ? 'issues' : 'issue'} that{' '}
          {issues.length > 1 ? 'match' : 'matches'} "{issues && debouncedQuery}
          ".
        </h1>
      </div>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ul className="issues-list">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        {issues.map((issue: any) => <li key={issue.id}>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <a
            className="title"
            href={issue.html_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div className="issue">
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <div className="issue-status">{issue.state}</div>
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <div className="issue-title">{issue.title}</div>
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <div className="issue-labels">
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                {issue.labels.map((label: any) => <div
                  className="issue-label"
                  key={label.id}
                  style={{
                    backgroundColor: `#${label.color}`,
                    color: `${contrastText(label.color)}`,
                  }}
                >
                  {label.name}
                </div>)}
              </div>
            </div>
          </a>
        </li>)}
      </ul>
    </div>
  );
}

export default Issues
