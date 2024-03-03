import { configureStore } from '@reduxjs/toolkit';
import { homesApi } from './api/homesApi';
import propertyReducer from './properties/property.reducer';
import { authApi } from './api/authentication';

export const store = configureStore({
  reducer: {
    properties: propertyReducer,
    [homesApi.reducerPath]: homesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(homesApi.middleware).prepend(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
