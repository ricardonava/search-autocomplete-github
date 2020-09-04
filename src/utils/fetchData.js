const fetchData = async (query, setIssues) => {
  const url = `https://api.github.com/search/issues?q=${query}+in:title+repo:facebook/react+state:open`
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)

  const fetchedIssues = data.items.map((issue) => {
    const created = new Date(issue.created_at).toString()
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
    }
  })
  setIssues(fetchedIssues)
}

export default fetchData
