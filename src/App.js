import { Route, Routes } from 'react-router-dom';
import Books from './components/pages/Books';
import Categories from './components/pages/Categories';
import Header from './components/Interface/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/" element={<Books />} />
      </Routes>
    </>

  );
}

export default App;
