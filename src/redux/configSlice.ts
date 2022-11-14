import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { api_configType } from "../types/type";

const initValue: api_configType = {
  images: {
    base_url: "",
    secure_base_url: "",
    backdrop_sizes: [],
    logo_sizes: [],
    poster_sizes: [],
    profile_sizes: [],
    still_sizes: []
  },
  change_keys: []
}

export const configSlice = createSlice({
  name: 'config',
  initialState: {
    value: initValue,
  },
  reducers: {
    rdxSetConfig: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const rdxGetConfig = (state: RootState) => state.config.value;
export const { rdxSetConfig } = configSlice.actions;
export default configSlice.reducer;
