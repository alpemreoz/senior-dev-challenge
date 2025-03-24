import { call, put, takeLatest,delay,debounce } from 'redux-saga/effects'
import { fetchPosts, setLoading, setPosts } from './postSlice'

function* fetchPostsSaga() {
  yield put(setLoading(true))
  const response: Response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts?_limit=5')
  const data = yield call([response, 'json'])
  yield put(setPosts(data))
  yield put(setLoading(false))
}

export default function* rootSaga() {
  yield takeLatest(fetchPosts.type, fetchPostsSaga)
}
