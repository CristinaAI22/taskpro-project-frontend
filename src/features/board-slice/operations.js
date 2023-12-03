import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:5000';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjRkNTMyODNjNDI4ODIzMWEzMGI5MyIsImVtYWlsIjoicmFkdV9kYW5pbGFhYUB5YWhvby5jb20iLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTcwMTEwNzA1OSwiZXhwIjoxNzAxNzExODU5fQ.2awYZnbCg8tzKlzwiAfLXW73jUezTwxDMxLmjWhEOcY';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const addList = createAsyncThunk(
  'taskPro/add-list',
  async (credentials, thunkAPI) => {
    try {
      setAuthHeader(token);
      const response = await axios.post('/api/taskPro/lists', credentials);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editList = createAsyncThunk(
  'taskPro/edit-list',
  async (credentials, thunkAPI) => {
    try {
      setAuthHeader(token);
      const { _id, data } = credentials;
      const response = await axios.patch('/api/taskPro/lists/' + _id, data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBoardData = createAsyncThunk(
  'taskPro/get-boardData',
  async (credentials, thunkAPI) => {
    try {
      setAuthHeader(token);
      const response = await axios.get(
        '/api/taskPro/boards/' + credentials._id
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteList = createAsyncThunk(
  'taskPro/delete-list',
  async (credentials, thunkAPI) => {
    try {
      setAuthHeader(token);
      const { _id } = credentials;
      const response = await axios.delete('/api/taskPro/lists/' + _id);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCard = createAsyncThunk(
  'taskPro/add-card',
  async (credentials, thunkAPI) => {
    try {
      setAuthHeader(token);
      const response = await axios.post('/api/taskPro/cards', credentials);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
