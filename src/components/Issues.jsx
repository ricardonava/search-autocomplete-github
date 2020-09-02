import React from "react";

export default function Searchbar({ issues }) {
  return (
    <div>
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
                      style={{ backgroundColor: `#${label.color}` }}
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
    </div>
  );
}
