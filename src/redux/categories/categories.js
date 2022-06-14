import { createSlice } from '@reduxjs/toolkit';

const categories = createSlice({
  name: 'category',
  initialState: {
    category: [],
  },
  reducers: {
    checkStatus() {
      return 'Under construction';
    },
  },
});

export const categActions = categories.actions;

export default categories;
