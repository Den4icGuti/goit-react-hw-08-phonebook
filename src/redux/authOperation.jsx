import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const register = createAsyncThunk('auth/register', async credintials => {
  try {
    const { data } = await axios.post('users/signup', credintials);
    return data;
  } catch (error) {
    return error.message;
  }
});

export const logIn = createAsyncThunk('auth/login', async credintials => {
  try {
    const { data } = await axios.post('user/login', credintials);
    return data;
  } catch (error) {
    return error.message;
  }
});
