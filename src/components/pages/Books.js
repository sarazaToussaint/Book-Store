import Book from '../Book';
import AddBook from '../Interface/Addbook';

const Books = () => (
  <main>
    <div className="container">
      <Book author="Henry Porter" title="The nice movie's history" />
      <Book author="Toussaint L'ouverture" title="The Haitian Revolution" />
      <Book author="Moliere" title="Le Docteur Amoureux" />
      <AddBook />
    </div>
  </main>
);
export default Books;
