import { useState, useEffect } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import SearchBox from './components/SearchBox';
import ContactLists from './components/ContactLists';

function App() {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [searchBoxValue, setSearchBoxValue] = useState('');
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchBoxValue.toLowerCase())
  );

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const addContact = (newContact) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: `id-${Date.now()}`, ...newContact },
    ]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={searchBoxValue} onFilter={setSearchBoxValue} />
      <ContactLists contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
