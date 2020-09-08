import React from 'react'
import useFetchSuspense from '../../hooks/useFetchSuspense'
import contrastText from '../../utils/contrastText'
import './issues.css'

const Issues = ({ debouncedQuery }) => {
  const url = `https://api.github.com/search/issues?q=${debouncedQuery}+in:title+repo:facebook/react+state:open`
  const { items: issues } = useFetchSuspense(url)
  console.log(issues)
  return (
    <div className="issues">
      <ul className="issues-list">
        {issues.map((issue) => (
          <li key={issue.id}>
            <a className="title" href={issue.html_url}>
              <div className="issue">
                <div className="issue-status">{issue.state}</div>
                <div className="issue-title">{issue.title}</div>
                <div className="issue-labels">
                  {issue.labels.map((label) => (
                    <div
                      className="issue-label"
                      key={label.id}
                      style={{
                        backgroundColor: `#${label.color}`,
                        color: `${contrastText(label.color)}`,
                      }}
                    >
                      {label.name}
                    </div>
                  ))}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Issues
