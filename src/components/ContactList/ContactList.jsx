import ContactListItem from './ContactListItem';
import css from './ContactList.module.css';
import { selectFilteredContacts} from '../../redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  
  return (
    <ul className={css.list}>
      {filteredContacts.length > 0 &&
        filteredContacts.map(contact => {
          return (
            <ContactListItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
              {...contact}
            />
          );
        })}
    </ul>
  );
};


export default ContactList;
