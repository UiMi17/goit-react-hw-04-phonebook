import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactsForm from './Contacts-form/ContactsForm';
import ContactsList from './Contacts-list/ContactsList';
import Filter from './Filter/Filter';
import { StyledTitle } from './StyledTitle';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const USER_CONTACTS = JSON.parse(localStorage.getItem('user_contacts'));
    if (USER_CONTACTS) {
      setContacts(USER_CONTACTS);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('user_contacts', JSON.stringify(contacts));
    }
    setIsMounted(true);
  }, [contacts, isMounted]);

  const createContact = ev => {
    const { name, number } = ev.target.elements;
    const USERNAME = name.value;
    const USER_NUMBER = number.value;

    const CONTACTS_NAMES = contacts.map(contact => {
      return contact.name;
    });

    if (!CONTACTS_NAMES.includes(USERNAME)) {
      setContacts((prevState) => {
        return [
          ...prevState,
          { name: USERNAME, number: USER_NUMBER, id: nanoid() },
        ]
      });
    } else {
      alert(`${USERNAME} is already in contacts.`);
    }
  };

  const handleFormSubmit = ev => {
    ev.preventDefault();
    createContact(ev);
    ev.currentTarget.reset()
  };

  const handleSearchInputChange = ev => {
    setFilter(ev.target.value);
  };

  const handleDeleteBtnClick = (id) => {
    setContacts((prevState) => {
      return prevState.filter(contact => contact.id !== id)
    });
  };

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <StyledTitle>Phonebook</StyledTitle>
      <ContactsForm handleFormSubmit={handleFormSubmit} />

      <StyledTitle>Contacts</StyledTitle>
      <Filter handleSearchInputChange={handleSearchInputChange} />
      <ContactsList
        contacts={filteredContacts}
        handleDeleteBtnClick={handleDeleteBtnClick}
      />
    </>
  );
};
