import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { IProperty } from '../../types/Property.type';

interface PropertySearchResultsState {
  searchTerm: string;
  currentProperties: IProperty[];
}

const initialState: PropertySearchResultsState = {
  searchTerm: '',
  currentProperties: [],
};

export const propertyReducer = createSlice({
  name: 'searchParameters',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setCurrentProperties: (state, action: PayloadAction<IProperty[]>) => {
      state.currentProperties = action.payload;
    },
  },
});

export const { setSearchTerm, setCurrentProperties } = propertyReducer.actions;

export default propertyReducer.reducer;
