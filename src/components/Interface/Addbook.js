import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { booksActions } from '../../redux/books/books';
import classes from './AddBook.module.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.length > 2 && author.length > 2) {
      dispatch(booksActions.addBook({
        id: Math.random().toString(),
        title,
        author,
      }));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className={classes.addbook}>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Book title" onChange={titleHandler} value={title} />
        <input type="text" placeholder="Author" onChange={authorHandler} value={author} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};
export default AddBook;
