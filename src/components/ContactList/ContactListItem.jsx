import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { deleteContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
 
  return (
    <li className={css.listItem} key={id}>
      {name}: {number}
      <button
        className={css.deleteBtn}
        onClick={() => dispatch(deleteContact(id))}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
