import axios, { isAxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { type RegisterType, type LoginType } from '../../../types/auth/request.type';
import { setAuthToken } from '../../../utils/localStorage';

export const registerUser = createAsyncThunk<RegisterType, RegisterType, { rejectValue: string }>(
  'auth/register',
  async (User, { rejectWithValue }) => {
    try {
      console.log('in try');
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post<RegisterType>(
        `${import.meta.env.VITE_API_BASE_URL}/api/Auth/register`,
        User,
        config,
      );
      console.log(response.data);
      console.log(response.status);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || error.message;
        return rejectWithValue(errorMessage);
      }
      console.log('error', error);
      return rejectWithValue('An unknown error occurred');
    }
  },
);

export const userLogin = createAsyncThunk<string, LoginType, { rejectValue: string }>(
  'auth/login',
  async (User: LoginType, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/Auth/login`, User, config);

      setAuthToken(data.token);
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        if (isAxiosError(error)) {
          const errorMessage = error.response?.data?.message || error.message;
          return rejectWithValue(errorMessage);
        }
        return rejectWithValue('An unknown error occurred');
      }
    }
  },
);
