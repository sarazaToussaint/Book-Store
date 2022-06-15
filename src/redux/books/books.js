/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: '1',
      title: 'The terminator',
      author: 'Commanddo',
    },
    {
      id: '2',
      title: 'Best movies',
      author: 'Henry Porter',
    },
  ],
};

const books = createSlice({

  name: 'book',
  initialState,

  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },

    removeBook(state, action) {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const booksActions = books.actions;

export default books;
