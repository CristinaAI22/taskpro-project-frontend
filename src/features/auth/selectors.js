export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectIsError = (state) => state.auth.isError;

export const token = (state) => state.auth.token;

export const selectErrorMessage = (state) => state.auth.errorMessage;

export const selectIsLoading = (state) => state.auth.isLoading;

export const selectUserPage = (state) => state.auth.userPage;

export const selectNeededCaloriesForDesiredWeight = (state) =>
  state.auth.calories.neededCaloriesForDesiredWeight;

export const selectNeededCalories = (state) =>
  state.auth.calories.neededCalories;

export const selectNonRecCategories = (state) => state.auth.nonRecCategories;

export const selectTheme = (state) => state.auth.theme;
