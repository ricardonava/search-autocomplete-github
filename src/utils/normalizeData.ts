export default function normalizeData(data: any) {
  return data.items.map((issue: any) => {
    const created = new Date(issue.created_at).toString()
    console.log(data)
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
  });
}
