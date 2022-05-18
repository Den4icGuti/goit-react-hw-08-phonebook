import { createSlice } from '@reduxjs/toolkit';
import { register } from './auth-operation';
import { login } from './auth-operation';
import { logOut } from './auth-operation';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null, password: null },
    token: null,
    isLoggedIn: false,
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export default authSlice.reducer;
