import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModal: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    onOpen: (state) => {
      state.isModal = true;
    },
    onClose: (state) => {
      state.isModal = false;
    },
  },
});

export const { onOpen, onClose } = modalSlice.actions;
export default modalSlice.reducer;
