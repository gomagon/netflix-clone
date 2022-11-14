import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { api_movieType } from "../types/type";

const initValue: api_movieType[] = [];

export const topratedSlice = createSlice({
  name: 'toprated',
  initialState: {
    value: initValue,
  },
  reducers: {
    rdxSetToprated: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const rdxGetToprated = (state: RootState) => state.toprated.value;
export const { rdxSetToprated } = topratedSlice.actions;
export default topratedSlice.reducer;
