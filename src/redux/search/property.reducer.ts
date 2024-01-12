import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface PropertySearchResultsState {
  searchTerm: string;
}

const initialState: PropertySearchResultsState = {
  searchTerm: '',
};

export const searchParametersReducer = createSlice({
  name: 'searchParameters',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = searchParametersReducer.actions;

export default searchParametersReducer.reducer;
