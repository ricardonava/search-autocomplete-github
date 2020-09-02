const fetchData = async (setIssues) => {
  const response = await fetch(
    "https://api.github.com/repos/facebook/react/issues"
  );
  const data = await response.json();
  console.log(data);
  const fetchedIssues = data.map((issue) => {
    const created = new Date(issue.created_at).toString();
    return {
      _id: issue.node_id,
      url: issue.html_url,
      title: issue.title,
      labels: issue.labels,
      state: issue.state,
      created,
      user: {
        login: issue.user.login,
      },
    };
  });
  setIssues(fetchedIssues);
};

export default fetchData;
