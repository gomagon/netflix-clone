import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { api_movieType } from "../types/type";

const initValue: api_movieType[] = [];

export const popularSlice = createSlice({
  name: 'popular',
  initialState: {
    value: initValue,
  },
  reducers: {
    rdxSetPopular: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const rdxGetPopular = (state: RootState) => state.popular.value;
export const { rdxSetPopular } = popularSlice.actions;
export default popularSlice.reducer;
