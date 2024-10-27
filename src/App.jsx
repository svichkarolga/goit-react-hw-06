import { useEffect, useState } from "react";
import initialContacts from "./contacts.json";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import "./App.css";


function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const stringifiedContacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(stringifiedContacts) ?? initialContacts;
  //   return parsedContacts;
  // });

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

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
