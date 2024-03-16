// https://blog.logrocket.com/handling-user-authentication-redux-toolkit
// used to help create frontend authentication

import { type ActionReducerMapBuilder, type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { registerUser } from './authAction';
import { getAuthToken } from '../../../utils/localStorage';
import { RegisterType } from '../../../types/auth/request.type';

const authToken = getAuthToken() ?? null;

type userInfo = null | RegisterType;
const initialState = {
  loading: false,
  userInfo: null as userInfo,
  userToken: authToken,
  error: null as string | null,
  success: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<typeof initialState>) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action: PayloadAction<RegisterType>) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.success = true;
    });
    builder.addCase(registerUser.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.loading = false;
      state.error = action.payload || 'An unexpected error occured';
    });
  },
});

export default authSlice.reducer;
