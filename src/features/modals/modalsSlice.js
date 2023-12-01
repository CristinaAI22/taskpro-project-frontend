import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterModal: false,
  addColumnModal: false,
  editColumnModal: false,
  deleteColumnModal: false,
  list: null,
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
      state.list = null;
    },
    openEditColumnModal: (state, action) => {
      state.list = action.payload;
      state.editColumnModal = true;
    },
    closeDeleteColumnModal: (state) => {
      state.deleteColumnModal = false;
      state.list = null;
    },
    openDeleteColumnModal: (state, action) => {
      state.list = action.payload;
      state.deleteColumnModal = true;
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
  closeDeleteColumnModal,
  openDeleteColumnModal,
} = modalsSlice.actions;

export default modalsSlice.reducer;
