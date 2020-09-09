import React, { memo } from 'react'
import useFetchSuspense from '../../hooks/useFetchSuspense'
import contrastText from '../../utils/contrastText'
import './issues.css'

interface CustomInputProps {
  debouncedQuery: string;
}

const Issues = memo<CustomInputProps>(
  props => {
    const { debouncedQuery } = props
    const url = `https://api.github.com/search/issues?q=${debouncedQuery}+in:title+repo:facebook/react+state:open&per_page=100`
    const data = useFetchSuspense(url)
    const { items: issues, total_count: count, message: errorMessage } = data

    if (errorMessage) {
      const message = errorMessage.replace(/ .*/, '')
      if (message === 'API') {
        return <h1>Hey speedy hold on, your searching to fast!!</h1>
      }
      return <h1>Unknown error please try again.</h1>
    }

    if (count === 0) {
      return <h1>No issues found that match "{debouncedQuery}"</h1>
    }

    return (
      <div className="issues">
        <div className="issues-title">
          <h1>
            Last {issues.length !== 1 && issues.length} <span>OPEN</span>{' '}
            {issues.length > 1 ? 'issues' : 'issue'} that{' '}
            {issues.length > 1 ? 'match' : 'matches'} "{issues && debouncedQuery}
          ".
        </h1>
        </div>
        <ul className="issues-list">
          {issues.map((issue: any) => <li key={issue.id}>
            <a
              className="title"
              href={issue.html_url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="issue">
                <div className="issue-status">{issue.state}</div>
                <div className="issue-title">{issue.title}</div>
                <div className="issue-labels">
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
    )
  })

export default Issues
