export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectIsError = (state) => state.auth.isError;

export const token = (state) => state.auth.token;

export const selectErrorMessage = (state) => state.auth.errorMessage;

export const selectIsLoading = (state) => state.auth.isLoading;

export const selectUserPage = (state) => state.auth.userPage;

export const selectTheme = (state) => state.auth.user.theme;

export const selectIsEditProfileModalOpen = (state) =>
  state.auth.isEditProfileModalOpen;
