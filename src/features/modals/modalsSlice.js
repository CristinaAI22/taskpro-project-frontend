import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterModal: false,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    closeFilterModal: (state) => {
      state.filterModal = false;
    },
    openFilterModal: (state) => {
      state.filterModal = true;
    },
  },
});

export const { openFilterModal, closeFilterModal } = modalsSlice.actions;

export default modalsSlice.reducer;
