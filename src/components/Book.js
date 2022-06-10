// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import classes from './Book.module.css';

const Book = ({ title, author }) => (
  <div className={classes.book}>
    <h3 className="title">{title}</h3>
    <div className="author">{author}</div>
    <div className={classes.buttons}>
      <button type="button">Comments</button>
      <button type="button">Remove</button>
      <button type="button">Edit</button>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
