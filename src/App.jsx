import { useEffect, useState } from "react";
import initialContacts from "./contacts.json";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import "./App.css";
import { useSelector } from "react-redux";
import { selectNameFilter } from "./redux/filtersSlice";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(stringifiedContacts) ?? initialContacts;
    return parsedContacts;
  });
  // const [filter, setFilter] = useState("");
  const filter = useSelector(selectNameFilter);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onAddContacts = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const onDeleteContacts = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={onAddContacts} />
        <SearchBox />
        {/* <SearchBox value={filter} onFilter={setFilter} /> */}
        <ContactList contacts={visibleContacts} onDelete={onDeleteContacts} />
      </div>
    </>
  );
}

export default App;
