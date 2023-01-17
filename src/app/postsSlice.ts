import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface Post {
  body: string,
  id: number,
  reactions: number,
  tags: string[],
  title: string,
  userId: number,
}

export interface PostsResponse {
  posts: Post[],
  limit: number,
  skip: number,
  total: number,
}

export interface PostsState {
  posts: PostsResponse | null,
  isLoading: boolean,
  hasError: boolean,
}

const initialState: PostsState = {
  posts: null,
  isLoading: true,
  hasError: false,
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
        hasError: false,
      };
    });
    builder.addCase(getPosts.rejected, (state) => {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      }
    });
  },
})

export const getPosts = createAsyncThunk(
  'getPosts',
  async () => {
    const response = await fetch('https://dummyjson.com/posts');
    return response.json();
  }
);

// export const postsActions = postsSlice.actions;

export default postsSlice.reducer;
