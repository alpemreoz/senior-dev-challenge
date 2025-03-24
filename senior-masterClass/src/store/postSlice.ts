import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Post = {
  id: number
  title: string
}

interface PostState {
  posts: Post[]
  loading: boolean
}

const initialState: PostState = {
  posts: [],
  loading: false,
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fetchPosts: () => {}, // Saga handles this
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload
    },
  },
})

export const { fetchPosts, setLoading, setPosts } = postSlice.actions
export default postSlice.reducer
