import { configureStore } from '@reduxjs/toolkit';
import books from './books/books';
import categories from './categories/categories';

// const rootReducer = combineReducers({
//   books,
//   categories,
// });

// const store = configureStore({
//   reducer: rootReducer,
// });

const store = configureStore({
  reducer: {
    books: books.reducer,
    categories: categories.reducer,
  },
});

export default store;
