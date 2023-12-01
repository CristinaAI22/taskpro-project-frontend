import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterModal: false,
  addColumnModal: false,
  editColumnModal: false,
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
    closeColumnModal: (state) => {
      state.addColumnModal = false;
    },
    openColumnModal: (state) => {
      state.addColumnModal = true;
    },
    closeEditColumnModal: (state) => {
      state.editColumnModal = false;
    },
    openEditColumnModal: (state) => {
      state.editColumnModal = true;
    },
  },
});

export const {
  openFilterModal,
  closeFilterModal,
  openColumnModal,
  openEditColumnModal,
  closeColumnModal,
  closeEditColumnModal,
} = modalsSlice.actions;

export default modalsSlice.reducer;
