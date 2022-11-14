import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { api_movieType } from "../types/type";

const initValue: api_movieType[] = [];

export const mylistSlice = createSlice({
  name: 'mylist',
  initialState: {
    value: initValue,
  },
  reducers: {
    rdxSetMylist: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const rdxGetMylist = (state: RootState) => state.mylist.value;
export const { rdxSetMylist } = mylistSlice.actions;
export default mylistSlice.reducer;
