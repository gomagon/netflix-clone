import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { api_movieType } from "../types/type";

const initValue: api_movieType[] = [];

export const upcomingSlice = createSlice({
  name: 'upcoming',
  initialState: {
    value: initValue,
  },
  reducers: {
    rdxSetUpcoming: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const rdxGetUpcoming = (state: RootState) => state.upcoming.value;
export const { rdxSetUpcoming } = upcomingSlice.actions;
export default upcomingSlice.reducer;
