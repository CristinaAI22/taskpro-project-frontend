import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:5000";

// Utility to add JWT

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("api/taskPro/users/register", credentials);

      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    const {
      auth: { token },
    } = thunkAPI.getState();
    if (!token) {
      return thunkAPI.rejectWithValue("Unable to fetch user.");
    }

    try {
      setAuthHeader(token);
      const response = await axios.get("api/taskPro/users/current");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const login = createAsyncThunk(
  "users/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("api/taskPro/users/login", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (err) {
      if (err.message === "Request failed with status code 400") {
        return thunkAPI.rejectWithValue(err.message);
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logOut = createAsyncThunk("users/logOut", async (_, thunkAPI) => {
  try {
    await axios.get("api/taskPro/users/logout");
    clearAuthHeader();
  } catch (error) {
    console.error("Logout Error:", error.response.data);
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const editUserProfile = createAsyncThunk(
  ".../editUserProfile",
  async (data, thunkAPI) => {
    const { auth } = thunkAPI.getState();
    const { token } = auth;

    try {
      setAuthHeader(token);
      const response = await axios.patch("api/taskPro/users/", data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (formData, thunkAPI) => {
    const { auth } = thunkAPI.getState();
    const { token } = auth;

    try {
      setAuthHeader(token);
      const response = await axios.patch("/api/taskPro/users/", formData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const updateUserTheme = createAsyncThunk(
  "auth/theme",
  async (data, thunkAPI) => {
    const { auth } = thunkAPI.getState();
    const { token } = auth;

    try {
      setAuthHeader(token);
      const response = await axios.patch("/api/taskPro/users/theme", data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
/*modal help*/
export const addComment = createAsyncThunk(
  "taskPro/add-comment",
  async ({ email, text }, thunkAPI) => {
    const { auth } = thunkAPI.getState();
    const { token } = auth;

    console.log("Token:", token);
    try {
      setAuthHeader(token);
      const response = await axios.post("/api/taskPro/users/need-help", {
        email,
        text,
      });
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      console.log("Response Data:", error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
 