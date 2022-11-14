import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { api_movieType } from "../types/type";

const initValue: api_movieType = {
  backdrop_path: "",
  id: -1,
  overview: "",
  release_date: "",
  title: "",
  vote_average: 0,
  youtube_key: "",
};

export const mainviewSlice = createSlice({
  name: 'mainview',
  initialState: {
    value: initValue,
  },
  reducers: {
    rdxSetMainview: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const rdxGetMainview = (state: RootState) => state.mainview.value;
export const { rdxSetMainview } = mainviewSlice.actions;
export default mainviewSlice.reducer;
