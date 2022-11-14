import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { api_genresType } from '../types/type';

const initValue: api_genresType = {genres: []};

export const genresSlice = createSlice({
  name: 'genres',
  initialState: {
    value: initValue,
  },
  reducers: {
    rdxSetGenres: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const rdxGetGenres = (state: RootState) => state.genres.value;
export const { rdxSetGenres } = genresSlice.actions;
export default genresSlice.reducer;
