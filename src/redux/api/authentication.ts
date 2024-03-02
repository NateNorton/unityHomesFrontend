import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5177',
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: { Email: string; Password: string }) => {
        return {
          url: '/api/Auth/login',
          method: 'POST',
          body,
        };
      },
    }),
    registerUser: builder.mutation({
      query: (body: {
        Username: string;
        Email: string;
        Password: string;
        ConfirmPassword: string;
        FirstName: string;
        LastName: string;
      }) => {
        return {
          url: '/api/Auth/register',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
