import { createSlice } from "@reduxjs/toolkit";
import getTheme from "../../components/header/getTheme";

import {
  register,
  refreshUser,
  logOut,
  login,
  updateProfile,
  updateUserTheme,
} from "./operations";

const initialState = {
  user: { name: null, email: null, avatar: null, theme: "light" },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: false,
  errorMessage: null,
  isEditProfileModalOpen: false,
  themeProps: getTheme(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openEditProfileModal: (state) => {
      state.isEditProfileModalOpen = true;
    },

    closeEditProfileModal: (state) => {
      state.isEditProfileModalOpen = false;
    },
    resetError: (state) => {
      state.isError = false;
    },
    updateUserThemeSuccess: (state, action) => {
      state.user.theme = action.payload.user.theme;
    },
    getThemeProprieties: (state) => getTheme(state.user.theme),
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        const errorMessage = action.payload;
        if (errorMessage === "Email in use") {
          state.errorMessage = errorMessage;
        } else {
          state.isError = true;
        }
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.themeProps = getTheme(action.payload.user.theme);
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isError = true;
        state.errorMessage = action.payload;
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.errorMessage = action.payload;
        state.isLoading = false;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.user.name = user.name;
        state.user.email = user.email;
        state.user.password = user.password;
        state.user.avatarURL = user.avatarURL;
        state.isLoading = false;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isError = true;
        state.errorMessage = action.payload;
        state.isLoading = false;
      })
      .addCase(updateUserTheme.fulfilled, (state, action) => {
        authSlice.caseReducers.updateUserThemeSuccess(state, action);
        state.themeProps = getTheme(action.payload.user.theme);
        state.isLoggedIn = true;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;

export const {
  openEditProfileModal,
  closeEditProfileModal,
  resetError,
  setIsNotLoggedIn,
  updateUserThemeSuccess,
} = authSlice.actions;
