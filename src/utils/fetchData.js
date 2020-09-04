export default async function fetchData(query) {
  const url = `https://api.github.com/search/issues?q=${query}+in:title+repo:facebook/react+state:open`
  const response = await fetch(url)
  const data = await response.json()
  return data
}
