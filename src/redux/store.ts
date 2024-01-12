import { configureStore } from '@reduxjs/toolkit';
import { homesApi } from './api/homesApi';
import searchParametersReducer from './search/property.reducer';

export const store = configureStore({
  reducer: {
    searchParameters: searchParametersReducer,
    [homesApi.reducerPath]: homesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(homesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
