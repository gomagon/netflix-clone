import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    value: false,
  },
  reducers: {
    rdxSetModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const rdxGetModal = (state: RootState) => state.modal.value;
export const { rdxSetModal } = modalSlice.actions;
export default modalSlice.reducer;
