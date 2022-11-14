import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { api_movieType } from "../types/type";

const initValue: api_movieType[] = [];

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    value: initValue,
  },
  reducers: {
    rdxSetMovies: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const rdxGetMovies = (state: RootState) => state.movies.value;
export const { rdxSetMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
