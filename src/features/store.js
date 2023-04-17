import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice/moviesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
