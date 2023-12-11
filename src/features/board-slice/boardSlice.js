import { createSlice } from '@reduxjs/toolkit';
import {
  addList,
  editList,
  getBoardData,
  deleteList,
  addCard,
  moveCard,
  editCard,
  deleteCard,
  addBoard,
  deleteBoard,
  editBoard,
  getAllBoards,
} from './operations';

const initialState = {
  bordData: null,
  isLoading: false,
  isError: false,
  filter: null,
  backgroundImg: null,
  boards: [],
  errorMessage: null,
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    resetFilter: (state) => {
      state.filter = null;
    },
    deleteBoardData: (state) => {
      state.bordData = null;
    },
    resetError: (state) => {
      state.isError = false;
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addList.fulfilled, (state, action) => {
        const { newList } = action.payload;
        state.bordData.lists.push({ ...newList, cards: [] });
        state.isLoading = false;
      })
      .addCase(addList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(editList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editList.fulfilled, (state, action) => {
        // const { list } = action.payload;
        // const newLists = state.bordData.lists.map((boardList) => {
        //   if (boardList._id === list._id) {
        //     return list;
        //   }
        //   return boardList;
        // });
        // state.bordData.lists = newLists;
        state.isLoading = false;
      })
      .addCase(editList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getBoardData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBoardData.fulfilled, (state, action) => {
        const { bordData } = action.payload;
        state.bordData = bordData;
        state.backgroundImg = bordData.backgroundImg;
        state.isLoading = false;
      })
      .addCase(getBoardData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(deleteList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteList.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(addCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCard.fulfilled, (state, action) => {
        const { newCard } = action.payload;
        state.bordData.lists.forEach((list) => {
          if (list._id === newCard.owner) {
            list.cards.push(newCard);
          }
        });
        state.isLoading = false;
      })
      .addCase(addCard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(moveCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(moveCard.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(moveCard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(editCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editCard.fulfilled, (state, action) => {
        const { card } = action.payload;
        const newBoardDataLists = state.bordData.lists.map((list) => {
          const newCards = list.cards.map((listCard) => {
            if (listCard._id === card._id) {
              return card;
            }
            return listCard;
          });
          list.cards = newCards;
          return list;
        });
        state.bordData.lists = newBoardDataLists;
        state.isLoading = false;
      })
      .addCase(editCard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(deleteCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        const deletedCard = action.payload.deletedCard;
        const newBoardDataLists = state.bordData.lists.map((list) => {
          const newCards = list.cards.filter(
            (listCard) => listCard._id !== deletedCard._id
          );
          list.cards = newCards;
          return list;
        });
        state.bordData.lists = newBoardDataLists;
        state.isLoading = false;
      })
      .addCase(deleteCard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(addBoard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        const newBoard = action.payload.newBoard;
        state.boards.push(newBoard);
        state.isError = false;
      })
      .addCase(addBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(editBoard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editBoard.fulfilled, (state, action) => {
        const { boardToUpdate } = action.payload;
        state.boards = state.boards.map((board) => {
          if (board._id === boardToUpdate._id) {
            return boardToUpdate;
          }
          return board;
        });
        state.isLoading = false;
      })
      .addCase(editBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(deleteBoard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        const _id = action.payload.deleteBoard;
        const newBoards = state.boards.filter((board) => board._id !== _id);
        state.boards = newBoards;
        state.isLoading = false;
      })
      .addCase(deleteBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getAllBoards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBoards.fulfilled, (state, action) => {
        state.boards = action.payload.boards;
        state.isLoading = false;
      })
      .addCase(getAllBoards.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const { setFilter, resetFilter, deleteBoardData, resetError } =
  boardSlice.actions;

export default boardSlice.reducer;
