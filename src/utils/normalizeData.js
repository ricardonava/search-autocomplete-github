import fetchData from './fetchData'

const normalizeData = async (query, setIssues, setIsLoading) => {
  setIsLoading(true)
  const data = await fetchData(query)

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
  console.log(fetchedIssues)
  setIssues(fetchedIssues)
  setIsLoading(false)
}

export default normalizeData
