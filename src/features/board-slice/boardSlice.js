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
} from './operations';

const initialState = {
  bordData: null,
  isLoading: false,
  isError: false,
  filter: null,
  backgroundImg: null,
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
      .addCase(addList.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
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
      .addCase(editList.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
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
      .addCase(getBoardData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deleteList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteList.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
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
      .addCase(addCard.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(moveCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(moveCard.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(moveCard.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
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
      .addCase(editCard.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
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
      .addCase(deleteCard.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { setFilter, resetFilter } = boardSlice.actions;

export default boardSlice.reducer;
