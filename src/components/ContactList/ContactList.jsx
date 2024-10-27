import React from "react";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import{deleteContact} from "../../redux/contactsSlice"

const ContactList = () => {
   const filter = useSelector(selectNameFilter);
const contacts= useSelector(state=>state.contacts.items);
 const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
 );
   const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };
  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {visibleContacts .map((contacts) => (
          <li className={styles.item} key={contacts.id}>
            <Contact data={contacts} onDelete={() => handleDeleteContact(contacts.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
