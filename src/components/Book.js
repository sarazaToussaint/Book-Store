// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { booksActions } from '../redux/books/books';
import { deleteBookData } from '../redux/books/actions';
import classes from './Book.module.css';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const removeHandler = (e) => {
    dispatch(deleteBookData(e.target.id));
    dispatch(booksActions.removeBook(e.target.id));
  };
  return (
    <div className={classes.book}>
      <div className={classes.category}>{category}</div>
      <h3 className="title">{title}</h3>
      <div className="author">{author}</div>
      <div className={classes.buttons}>
        <button type="button">Comments</button>
        <button id={id} type="button" onClick={removeHandler}>
          Remove
        </button>
        <button type="button">Edit</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
