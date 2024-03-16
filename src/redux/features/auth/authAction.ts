import axios, { isAxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { type RegisterType, type LoginType } from '../../../types/auth/request.type';
import { setAuthToken } from '../../../utils/localStorage';

export const registerUser = createAsyncThunk<RegisterType, RegisterType, { rejectValue: string }>(
  'auth/register',
  async (User, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post<RegisterType>(`${process.env.API_BASE_URL}/api/Auth/register`, User, config);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || error.message;
        return rejectWithValue(errorMessage);
      }
      return rejectWithValue('An unknown error occurred'); // Handle non-Axios errors
    }
  },
);

export const userLogin = createAsyncThunk('auth/login', async (User: LoginType, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(`${process.env.API_BASE_URL}/api/Auth/login`, User, config);

    setAuthToken(data.token);
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
});
