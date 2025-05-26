import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IPost {
	userId: number
	id: number
	title: string
	body: string
}

interface IPostsState {
	allPosts: IPost[]
	singlePost: IPost | null
	postsLoading: boolean
	error: string | null
}

const initialState: IPostsState = {
	allPosts: [],
	singlePost: null,
	postsLoading: false,
	error: null,
}

export const fetchPosts = createAsyncThunk<IPost[]>(
	'Posts/fetchPosts',
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts')

			if (!response.ok) throw new Error('Something went wrong!')

			return await response.json()
		} catch (error: any) {
			return rejectWithValue(error.message)
		}
	}
)

export const fetchPostsById = createAsyncThunk<IPost, number>(
	'Posts/fetchPostsById',
	async (postId, { rejectWithValue }) => {
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${postId}`
			)

			if (!response.ok) throw new Error('Something went wrong!')

			return await response.json()
		} catch (error: any) {
			return rejectWithValue(error.message)
		}
	}
)

const postsSlice = createSlice({
	name: 'Posts',
	initialState,
	reducers: {
		setSinglePost: (state, action: PayloadAction<IPost>) => {
			state.singlePost = action.payload
		},
	},
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
				state.postsLoading = false
				state.error = action.payload as string
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
				state.postsLoading = false
				state.error = action.payload as string
			})
	},
})

export default postsSlice.reducer
export const postsActions = postsSlice.actions
