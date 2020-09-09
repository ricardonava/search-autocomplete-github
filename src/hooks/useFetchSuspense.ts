import produce from 'immer'
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/lru-cache` if it exists or... Remove this comment to see the full error message
import LRU from 'lru-cache'
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/md5` if it exists or add a... Remove this comment to see the full error message
import md5 from 'md5'

const cache = new LRU(50)

const useFetchSuspense = (url: any, fetchOptions = {}) => {
  const key = `${url}.${md5(JSON.stringify(fetchOptions))}`
  const value = cache.get(key) || { status: 'new', data: null }
  console.log(value)
  if (value.status === 'resolved') {
    return value.data
  }

  const promise = fetch(url, fetchOptions).then((response) => response.json())

  promise.then((data) => {
    cache.set(
      key,
      produce(value, (draft: any) => {
        draft.status = 'resolved'
        draft.data = data
      })
    )
  })
  console.log(value)

  throw promise
}

export default useFetchSuspense
