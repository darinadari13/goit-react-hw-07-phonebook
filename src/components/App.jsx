import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useEffect } from 'react';
import { selectContacts, selectLoading } from '../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import Loader from './Loader';

export default function App() {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <span>'No contacts'</span>
        )}
        {loading && <Loader/>}
      </div>
    );
}
