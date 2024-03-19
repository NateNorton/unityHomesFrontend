import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { type IProperty } from '../../types/Property.type';
import type PropertyType from '../../types/PropertyType.type';

export const homesApi = createApi({
  reducerPath: 'homesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5177/api/' }),
  endpoints: (builder) => ({
    getPropertiesFromLocation: builder.query<IProperty[], string>({
      query: (location) => `properties?location=${location}`,
    }),

    getPropertyTypes: builder.query<PropertyType[], void>({
      query: () => `PropertyTypes`,
    }),

    addNewProperty: builder.mutation({
      query: (newProperty) => ({
        url: 'Properties',
        methos: 'POST',
        body: newProperty,
      }),
    }),

    // getPropertyFromID: builder.query<IProperty, number>({
    //   query: (id) => 
    // })
  }),
});

export const { useGetPropertiesFromLocationQuery, useGetPropertyTypesQuery } = homesApi;
