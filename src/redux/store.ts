import { configureStore } from '@reduxjs/toolkit';
import { homesApi } from './api/homesApi';
import propertyReducer from './properties/property.reducer';
import authReducer from './features/auth/authSlice';

export const store = configureStore({
  reducer: {
    properties: propertyReducer,
    auth: authReducer,
    [homesApi.reducerPath]: homesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(homesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
