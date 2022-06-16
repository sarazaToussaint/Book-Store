/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: {},
};
const books = createSlice({
  name: 'book',
  initialState,
  reducers: {
    replaceBook(state, action) {
      state.books = { ...action.payload };
    },
    addBook(state, action) {
      state.books = { ...state.books, ...action.payload };
    },
    removeBook(state, action) {
      delete state.books[action.payload];
    },
  },
});

export const booksActions = books.actions;

export default books;

/* eslint-disable no-param-reassign */
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   books: [],
// };

// const books = createSlice({

//   name: 'book',
//   initialState,

//   reducers: {
//     addBook(state, action) {
//       state.books.push(action.payload);
//     },

//     removeBook(state, action) {
//       state.books = state.books.filter((book) => book.id !== action.payload);
//     },
//   },
// });

// export const booksActions = books.actions;

// export default books;
