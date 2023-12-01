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
