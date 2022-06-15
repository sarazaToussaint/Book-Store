import { useDispatch } from 'react-redux';
import { categActions } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const statusCheckHandler = () => {
    dispatch(categActions.checkStatus());
  };

  return (
    <main>
      <button type="button" onClick={statusCheckHandler}>Check Status</button>
    </main>
  );
};
export default Categories;
