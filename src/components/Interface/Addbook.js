import classes from './AddBook.module.css';

const AddBook = () => (
  <div className={classes.addbook}>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Author" />
      <button type="submit">Add Book</button>
    </form>
  </div>
);
export default AddBook;
