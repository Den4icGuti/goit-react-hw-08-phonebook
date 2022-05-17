import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credintials => {
  try {
    const { data } = await axios.post('users/signup', credintials);
    token.set(data.token);
    return data;
  } catch (error) {
    return error.message;
  }
});

export const logIn = createAsyncThunk('auth/login', async credintials => {
  try {
    const { data } = await axios.post('users/login', credintials);
    return data;
  } catch (error) {
    return error.message;
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return error.message;
  }
});
