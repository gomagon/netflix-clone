import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { api_movieType } from "../types/type";

const initValue: api_movieType[] = [];

export const nowplayingSlice = createSlice({
  name: 'nowplaying',
  initialState: {
    value: initValue,
  },
  reducers: {
    rdxSetNowplaying: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const rdxGetNowplaying = (state: RootState) => state.nowplaying.value;
export const { rdxSetNowplaying } = nowplayingSlice.actions;
export default nowplayingSlice.reducer;
