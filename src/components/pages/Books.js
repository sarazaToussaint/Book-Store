import { useSelector } from 'react-redux';
import Book from '../Book';
import AddBook from '../Interface/Addbook';

const Books = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <main>
      <div className="container">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            author={book.author}
            title={book.title}
          />
        ))}
        <AddBook />
      </div>
    </main>
  );
};
export default Books;
