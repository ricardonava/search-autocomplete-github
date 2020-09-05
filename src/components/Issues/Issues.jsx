import React, { memo } from 'react'
import contrastText from '../../utils/contrastText'
import './issues.css'

// Only rerender when both props change
const areEqual = (prevProps, nextProps) => true

const Searchbar = memo((props) => {
  const { issues, query } = props
  return (
    <div className="issues">
      <div className="issues-title">
        <h1>
          Last {issues.length !== 1 && issues.length} <span>OPEN</span>{' '}
          {issues.length > 1 ? 'issues' : 'issue'} that{' '}
          {issues.length > 1 ? 'match' : 'matches'} "{issues && query}".
        </h1>
      </div>
      <ul className="issues-list">
        {issues.map((issue) => (
          <li key={issue._id}>
            <a className="title" href={issue.url}>
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
}, areEqual)

export default Searchbar
