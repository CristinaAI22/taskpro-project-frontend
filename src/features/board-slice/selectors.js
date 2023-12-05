export const selectBoardTitle = (state) => state.board.bordData.title;

export const selectBoardLists = (state) => state.board.bordData.lists;

export const selectBoardId = (state) => state.board.bordData._id;

export const selectBoardIsLoading = (state) => state.board.isLoading;

export const selectBoardIsError = (state) => state.board.isError;

export const selectBoardFilter = (state) => state.board.filter;

export const selectBoardData = (state) => state.board.bordData;
