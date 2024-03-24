import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { EditPropertyType, type IProperty } from '../../types/Property.type';
import type PropertyType from '../../types/PropertyType.type';
import { RootState } from '../store';
import { ArticleType } from '../../types/Article.type';

export const homesApi = createApi({
  reducerPath: 'homesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5177/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.userToken;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // get all properties
    getPropertiesFromLocation: builder.query<IProperty[], string>({
      query: (location) => `properties?location=${location}`,
    }),

    // get a single property
    getPropertyFromID: builder.query<IProperty, number>({
      query: (id) => `properties/ ${id}`,
    }),

    // create new property
    addNewProperty: builder.mutation<IProperty, IProperty>({
      query: (newProperty) => ({
        url: 'Properties',
        methos: 'POST',
        body: newProperty,
      }),
    }),

    // edit property
    editProperty: builder.mutation<void, { propertyID: number; updates: EditPropertyType }>({
      query: (data) => ({
        url: `Properties/${data.propertyID}`,
        method: 'PUT',
        body: data.updates,
      }),
    }),

    // delete property
    deleteProperty: builder.mutation<void, number>({
      query: (propertyID) => ({
        url: `Properties/${propertyID}`,
        method: 'DELETE',
      }),
    }),

    // get all property types
    getPropertyTypes: builder.query<PropertyType[], void>({
      query: () => `PropertyTypes`,
    }),

    // create chat message
    sendMessage: builder.mutation<void, { message: string; sentToId: number }>({
      query: (data) => ({
        url: 'Chat',
        method: 'POST',
        body: {
          recipientId: data.sentToId,
          content: data.message,
        },
      }),
    }),

    // edit chat message
    editMessage: builder.mutation<void, { messageId: number; newContent: string }>({
      query: (data) => ({
        url: `Chat/${data.messageId}`,
        method: 'PUT',
        body: {
          content: data.newContent,
        },
      }),
    }),

    // delete chat message
    deleteMessage: builder.mutation<void, number>({
      query: (messageId) => ({
        url: `Chat/${messageId}`,
        method: 'DELETE',
      }),
    }),

    // Get single article
    getArticle: builder.query<ArticleType, number>({
      query: (id) => `Articles/${id}`,
    }),

    // get list of article summaries
    getAllArticles: builder.query<ArticleType[], void>({
      query: () => `Article`,
    }),

    // create property application
    // delete application
    // edit application
  }),
});

export const { useGetPropertiesFromLocationQuery, useGetPropertyTypesQuery } = homesApi;
