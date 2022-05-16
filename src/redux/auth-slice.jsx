import { createSlice } from '@reduxjs/toolkit';
import { register } from './authOperation';
import { logIn } from './authOperation';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null, password: null },
    token: null,
    isLoggenIn: false,
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggenIn = true;
    },
  },
  [logIn.fulfilled](state, action) {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggenIn = true;
  },
});

export default authSlice.reducer;
