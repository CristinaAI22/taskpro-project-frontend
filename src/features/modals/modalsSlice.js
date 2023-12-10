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
  card: null,
  board: null,
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
      state.card = action.payload;
    },
    closeEditCardModal: (state, action) => {
      state.editCardModal = false;
      state.card = null;
    },
    openMoveCardModal: (state, action) => {
      state.card = action.payload;
      state.moveCardModal = true;
    },
    closeMoveCardModal: (state) => {
      state.moveCardModal = false;
      state.card = null;
    },
    openDeleteCardModal: (state, action) => {
      state.deleteCardModal = true;
      state.card = action.payload;
    },
    closeDeleteCardModal: (state, action) => {
      state.deleteCardModal = false;
    },
    setBoard: (state, action) => {
      state.board = action.payload;
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
  setBoard,
} = modalsSlice.actions;

export default modalsSlice.reducer;
