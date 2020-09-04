import React from 'react'
import contrastText from '../../utils/contrastText'
import './issues.css'

const Searchbar = ({ issues }) => (
  <div className="issues">
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

export default Searchbar
