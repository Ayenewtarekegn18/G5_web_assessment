import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
}

interface BlogState {
  blogs: Blog[];
  currentBlog: Blog | null;
}

const initialState: BlogState = {
  blogs: [],
  currentBlog: null,
};

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogs(state, action: PayloadAction<Blog[]>) {
      state.blogs = action.payload;
    },
    addBlog(state, action: PayloadAction<Blog>) {
      state.blogs.push(action.payload);
    },
    setCurrentBlog(state, action: PayloadAction<Blog>) {
      state.currentBlog = action.payload;
    },
    // Add more reducers as needed
  },
});

export const { setBlogs, addBlog, setCurrentBlog } = blogSlice.actions;
export default blogSlice.reducer;
