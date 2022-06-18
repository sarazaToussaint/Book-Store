// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ImSpinner8 } from 'react-icons/im';
import { booksActions } from '../redux/books/books';
import { deleteBookData } from '../redux/books/actions';
import classes from './Book.module.css';

const Book = ({
  id, title, author, category, index, chapter,
}) => {
  const dispatch = useDispatch();

  const removeHandler = (e) => {
    dispatch(deleteBookData(e.target.id));
    dispatch(booksActions.removeBook(e.target.id));
  };
  return (
    <div className={classes.bookContainer}>
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
      <div className={classes.progress}>
        <div>
          <ImSpinner8 className={classes.icon} />
          {index}
          {' '}
          %
        </div>
        <p>Completed</p>
      </div>
      <div className={classes.update}>
        <h5>CURRENT CHAPTER</h5>
        <h3>
          Chapter-
          {chapter}
        </h3>
        <button type="button">Update progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  chapter: PropTypes.number.isRequired,
};

export default Book;
