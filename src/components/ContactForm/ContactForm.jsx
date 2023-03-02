import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';

export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const {name, value} = e.target;
    
    switch (name) {
      case 'name':
        setName(value);
        break;  
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  }


  const handleSubmit = e => {
    e.preventDefault();
    const isInContacts = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {name, number, id: nanoid() }
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };
  
    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <h3 className={css.title}>Name</h3>
        <input
          className={css.nameInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
        />
        <h3 className={css.title}>Number</h3>
        <input
          className={css.numberInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
        />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }


