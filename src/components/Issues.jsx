import React from "react";

export default function Searchbar({ issues }) {
  return (
    <div>
      <ul className="issues">
        {issues.map((issue) => (
          <li key={issue._id}>
            <a className="title" href={issue.url}>
              <div className="issue">{issue.title}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
