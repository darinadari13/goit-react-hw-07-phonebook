import css from './Filter.module.css';
import { handleFilterSlice } from '../../redux/contactsSlice';
import { useSelector,useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';


const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilter = e => {
    dispatch(handleFilterSlice(e.target.value));
  };
  
  return (
    <div className="filter">
      <h4 className={css.title}>Find contacts by name</h4>
      <input
        className={css.inputFilter}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
};

export default Filter;
