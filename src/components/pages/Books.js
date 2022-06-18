/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksData } from '../../redux/books/actions';
import Book from '../Book';
import AddBook from '../Interface/Addbook';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  useEffect(() => {
    dispatch(fetchBooksData());
  }, [dispatch]);

  const bookList = [];

  for (const key in books) {
    bookList.push(
      <Book
        key={key}
        id={key}
        author={books[key][0].author}
        title={books[key][0].title}
        category={books[key][0].category}
        index={Math.floor(Math.random() * 60) + 5}
        chapter={Math.floor(Math.random() * 10) + 1}
      />,
    );
  }

  return (
    <main>
      <div className="container">
        {bookList}
        <AddBook />
      </div>
    </main>
  );
};
export default Books;
