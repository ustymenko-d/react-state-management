import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
	allPosts: [],
	singlePost: {},
	postsLoading: false,
	error: null,
}

export const fetchPosts = createAsyncThunk(
	'Posts/fetchPosts',
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts')

			if (!response.ok) throw new Error('Something went wrong!')

			const data = await response.json()

			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const fetchPostsById = createAsyncThunk(
	'Posts/fetchPostsById',
	async (postId, { rejectWithValue }) => {
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${postId}`
			)

			if (!response.ok) throw new Error('Something went wrong!')

			const data = await response.json()

			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const postsSlice = createSlice({
	name: 'Posts',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.postsLoading = true
				state.error = null
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.postsLoading = false
				state.allPosts = action.payload
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.error = action.payload
			})

			.addCase(fetchPostsById.pending, (state) => {
				state.postsLoading = true
				state.error = null
			})
			.addCase(fetchPostsById.fulfilled, (state, action) => {
				state.postsLoading = false
				state.singlePost = action.payload
			})
			.addCase(fetchPostsById.rejected, (state, action) => {
				state.error = action.payload
			})
	},
})

export default postsSlice.reducer
