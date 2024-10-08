'use cl'

import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './Blogslice';

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
  },
});

// TypeScript type for the store's dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;