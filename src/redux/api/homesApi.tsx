import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { type IProperty } from '../../types/Property.type';

export const homesApi = createApi({
  reducerPath: 'homesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5177/api/' }),
  endpoints: (builder) => ({
    getPropertiesFromLocation: builder.query<IProperty[], string>({
      query: (locaton) => `properties?location=${locaton}`,
    }),
  }),
});

export const { useGetPropertiesFromLocationQuery } = homesApi;
