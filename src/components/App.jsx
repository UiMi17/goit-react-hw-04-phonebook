import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactsForm from './Contacts-form/ContactsForm';
import ContactsList from './Contacts-list/ContactsList';
import Filter from './Filter/Filter';
import { StyledTitle } from './StyledTitle';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const USER_CONTACTS = JSON.parse(localStorage.getItem('user_contacts'));
    if (USER_CONTACTS) {
      this.setState({ contacts: USER_CONTACTS });
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        'user_contacts',
        JSON.stringify(this.state.contacts)
      );
    }
  }

  createContact = ev => {
    const { contacts } = this.state;
    const { name, number } = ev.target.elements;
    const USERNAME = name.value;
    const USER_NUMBER = number.value;

    const CONTACTS_NAMES = contacts.map(contact => {
      return contact.name;
    });

    if (!CONTACTS_NAMES.includes(USERNAME)) {
      this.setState(prevState => {
        return {
          contacts: [
            ...prevState.contacts,
            {
              name: USERNAME,
              number: USER_NUMBER,
              id: nanoid(),
            },
          ],
        };
      });
    } else {
      alert(`${USERNAME} is already in contacts.`);
    }
  };

  handleFormSubmit = ev => {
    ev.preventDefault();
    this.createContact(ev);
  };

  handleSearchInputChange = ev => {
    this.setState({ filter: ev.target.value });
  };

  handleDeleteBtnClick = ev => {
    const CONTACT_ID = ev.target.getAttribute('id');
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== CONTACT_ID
        ),
      };
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return (
      <>
        <StyledTitle>Phonebook</StyledTitle>
        <ContactsForm handleFormSubmit={this.handleFormSubmit} />

        <StyledTitle>Contacts</StyledTitle>
        <Filter handleSearchInputChange={this.handleSearchInputChange} />
        <ContactsList
          contacts={filteredContacts}
          handleDeleteBtnClick={this.handleDeleteBtnClick}
        />
      </>
    );
  }
}
