import { useDispatch } from 'react-redux';
import { categActions } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(categActions.checkStatus());
  };

  return (
    <main className="categories">
      <button type="button" onClick={clickHandler}>Check Status</button>
    </main>
  );
};

export default Categories;
