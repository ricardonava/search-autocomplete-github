import React from "react";
import ReactDOM from "react-dom";
// @ts-expect-error ts-migrate(6142) FIXME: Module './App' was resolved to '/mnt/c/Users/Code/... Remove this comment to see the full error message
import App from "./App";
import "./index.css";

ReactDOM.render(
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <React.StrictMode>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
