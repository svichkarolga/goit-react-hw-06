import { useEffect, useState } from "react";
import initialContacts from "./contacts.json";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import "./App.css";
import { useSelector } from "react-redux";
import { selectNameFilter } from "./redux/filtersSlice";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { useDispatch } from "react-redux";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(stringifiedContacts) ?? initialContacts;
    return parsedContacts;
  });

  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onAddContacts = addContact(newContact);
  dispatch(onAddContacts);
  // const onAddContacts = (newContact) => {
  //   setContacts((prevContacts) => {
  //     return [...prevContacts, newContact];
  //   });
  // };

  const onDeleteContacts = deleteContact(contactId);
  dispatch(onDeleteContacts);
  // const onDeleteContacts = (contactId) => {
  //   setContacts((prevContacts) => {
  //     return prevContacts.filter((contact) => contact.id !== contactId);
  //   });
  // };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
