import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { EditPropertyType, type IProperty } from '../../types/Property.type';
import type PropertyType from '../../types/PropertyType.type';
import { RootState } from '../store';
import { ArticleType } from '../../types/Article.type';
import { ChatParticipant } from '../../types/Chat.type';
import { UserDetails, UserUpdateType } from '../../types/User.type';

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
        method: 'POST',
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

    // get all chat participants
    getChatParticipants: builder.query<ChatParticipant[], void>({
      query: () => `Chat/participants`,
    }),

    // Get single article
    getArticle: builder.query<ArticleType, number>({
      query: (id) => `Articles/${id}`,
    }),

    // get list of article summaries
    getAllArticles: builder.query<ArticleType[], void>({
      query: () => `Article`,
    }),

    // get favourite properties
    getFavouriteProperties: builder.query<IProperty[], void>({
      query: () => `/user/favourites`,
    }),

    // add property to favourites
    addPropertyToFavourites: builder.mutation<void, number>({
      query: (propertyID) => ({
        url: `user/favourites/${propertyID}`,
        method: 'POST',
      }),
    }),

    // delete from facourites
    deleteFromFavourites: builder.mutation<void, number>({
      query: (propertyID) => ({
        url: `user/favourites/${propertyID}`,
        method: 'DELETE',
      }),
    }),

    // get user details
    getUserDetails: builder.query<UserDetails, void>({
      query: () => 'user/details',
    }),

    // edit user details
    editUserDetails: builder.mutation<void, UserUpdateType>({
      query: (data) => ({
        url: 'user/update',
        method: 'PUT',
        body: data,
      }),
    }),

    // create property application
    // delete application
    // edit application
  }),
});

export const {
  useGetPropertiesFromLocationQuery,
  useGetPropertyTypesQuery,
  useAddNewPropertyMutation,
  useDeleteMessageMutation,
  useDeletePropertyMutation,
  useEditMessageMutation,
  useEditPropertyMutation,
  useGetAllArticlesQuery,
  useGetArticleQuery,
  useGetChatParticipantsQuery,
  useGetPropertyFromIDQuery,
  useGetFavouritePropertiesQuery,
  useAddPropertyToFavouritesMutation,
  useDeleteFromFavouritesMutation,
  useEditUserDetailsMutation,
  useGetUserDetailsQuery,
} = homesApi;
