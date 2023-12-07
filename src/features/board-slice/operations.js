import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:5000';

export const addList = createAsyncThunk(
  'taskPro/add-list',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/taskPro/lists', credentials);
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
      const response = await axios.post('/api/taskPro/cards', credentials);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editCard = createAsyncThunk(
  'taskPro/edit-card',
  async (credentials, thunkAPI) => {
    try {
      const { _id, data } = credentials;
      const response = await axios.patch('/api/taskPro/cards/' + _id, data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const moveCard = createAsyncThunk(
  'taskPro/move-card',
  async (credentials, thunkAPI) => {
    try {
      const { _id, data } = credentials;
      const response = await axios.patch('/api/taskPro/cards/' + _id, data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'taskPro/delete-card',
  async (credentials, thunkAPI) => {
    try {
      const { _id } = credentials;
      const response = await axios.delete('/api/taskPro/cards/' + _id);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
