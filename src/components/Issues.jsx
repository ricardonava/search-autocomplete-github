import React from 'react'
import contrastText from './../utils/contrastText'

export default function Searchbar({ issues }) {
  return (
    <ul className="issues">
      {issues.map((issue) => (
        <li key={issue._id}>
          <a className="title" href={issue.url}>
            <div className="issue">
              <div className="issue-status">{issue.state}</div>
              <div className="issue-title">{issue.title}</div>
              <div className="issue-labels">
                {issue.labels.map((label) => (
                  <span
                    className="issue-label"
                    key={label.id}
                    style={{
                      backgroundColor: `#${label.color}`,
                      color: `${contrastText(label.color)}`,
                    }}
                  >
                    {label.name}
                  </span>
                ))}
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}
