import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterModal: false,
  addColumnModal: false,
  editColumnModal: false,
  deleteColumnModal: false,
  addCardModal: false,
  moveCardModal: false,
  editCardModal: false,
  deleteCardModal: false,
  list: null,
  listId: null,
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
    openAddCardModal: (state, action) => {
      state.listId = action.payload;
      state.addCardModal = true;
    },
    closeAddCardModal: (state, action) => {
      state.addCardModal = false;
    },
    openEditCardModal: (state, action) => {
      state.editCardModal = true;
    },
    closeEditCardModal: (state, action) => {
      state.editCardModal = true;
    },
    openMoveCardModal: (state, action) => {
      state.moveCardModal = true;
    },
    closeMoveCardModal: (state, action) => {
      state.moveCardModal = true;
    },
    openDeleteCardModal: (state, action) => {
      state.deleteCardModal = true;
    },
    closeDeleteCardModal: (state, action) => {
      state.deleteCardModal = true;
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
  openAddCardModal,
  closeAddCardModal,
  openDeleteCardModal,
  openEditCardModal,
  openMoveCardModal,
  closeDeleteCardModal,
  closeEditCardModal,
  closeMoveCardModal,
} = modalsSlice.actions;

export default modalsSlice.reducer;
