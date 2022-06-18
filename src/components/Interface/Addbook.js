import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { booksActions } from '../../redux/books/books';
import { sendBooksData } from '../../redux/books/actions';
import classes from './AddBook.module.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('action');

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (title.length > 2 && author.length > 2) {
      const newBook = {
        id: uuidv4(),
        title,
        author,
        category,
      };
      dispatch(sendBooksData(newBook));
      const key = newBook.id;
      const obj = {};
      obj[key] = [newBook];
      dispatch(booksActions.addBook(obj));
      setTitle('');
      setAuthor('');
      setCategory('action');
    }
  };

  return (
    <div className={classes.addbook}>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Book title"
          onChange={titleHandler}
          value={title}
        />
        <input
          type="text"
          placeholder="Author"
          onChange={authorHandler}
          value={author}
        />
        <select
          value={category}
          onChange={categoryHandler}
          className={classes.select}
        >
          <option value="" defaultValue>Category</option>
          <option value="fiction">Fiction</option>
          <option value="technology">Technology</option>
          <option value="science">Science</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};
export default AddBook;
