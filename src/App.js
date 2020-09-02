import React, { useEffect, useState } from "react";
import Issues from "./components/Issues";
import Searchbar from "./components/Searchbar";
import fetchData from "./utils/fetchData";

function App() {
  const [issues, setIssues] = useState(null);

  useEffect(() => {
    fetchData(setIssues);
  }, []);

  console.log(issues);
  return (
    <div className="grid-container">
      <header>
        <Searchbar />
        <button>Search</button>
      </header>
      <main>
        <div className="content">
          <div className="main">
            {!issues ? <h1>LOADING...</h1> : <Issues issues={issues} />}
          </div>
        </div>
      </main>
      <footer>React's got issues.</footer>
    </div>
  );
}

export default App;
