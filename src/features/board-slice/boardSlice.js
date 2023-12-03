import { createSlice } from '@reduxjs/toolkit';
import {
  addList,
  editList,
  getBoardData,
  deleteList,
  addCard,
} from './operations';

const initialState = {
  bordData: {
    _id: '656639d36713cb888590d983',
    title: 'new title',
    __v: 0,
    lists: [
      {
        _id: '65663be08e3fb6d2d8e842ca',
        title: 'new list1',
        owner: '656639d36713cb888590d983',
        __v: 0,
        cards: [
          {
            _id: '65679150ecdc70e9ab2e5575',
            title: 'card title',
            description: 'some card description',
            labelColor: '#8FA1D0',
            deadline: '02/12/2023',
            owner: '65663be08e3fb6d2d8e842ca',
            __v: 0,
          },
          {
            _id: '65679155ecdc70e9ab2e5578',
            title: 'card 2 title',
            description: 'some card description',
            labelColor: '#BEDBB0',
            deadline: '06/12/2023',
            owner: '65663be08e3fb6d2d8e842ca',
            __v: 0,
          },
        ],
      },
      {
        _id: '656791a9ecdc70e9ab2e557b',
        title: 'new list2',
        owner: '656639d36713cb888590d983',
        __v: 0,
        cards: [
          {
            _id: '656791b8ecdc70e9ab2e557e',
            title: 'card 2 title',
            description: 'some card description',
            labelColor: '#FFFFFF',
            deadline: '06/12/2023',
            owner: '656791a9ecdc70e9ab2e557b',
            __v: 0,
          },
          {
            _id: '656791beecdc70e9ab2e5581',
            title: 'card 1 title',
            description: 'some card description',
            labelColor: '#FFFFFF',
            deadline: '06/12/2023',
            owner: '656791a9ecdc70e9ab2e557b',
            __v: 0,
          },
        ],
      },
    ],
  },
  isLoading: false,
  isError: false,
  filter: null,
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
        state.bordData.lists.push(newList);
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
        const { list } = action.payload;
        const newLists = state.bordData.lists.map((boardList) => {
          if (boardList._id === list._id) {
            return list;
          }
          return boardList;
        });
        state.bordData.lists = newLists;
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
      });
  },
});

export const { setFilter, resetFilter } = boardSlice.actions;

export default boardSlice.reducer;
