import React from "react";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const filter = useSelector(selectNameFilter);
  const contacts = useSelector(selectContacts);
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {visibleContacts.map((contacts) => (
          <li className={styles.item} key={contacts.id}>
            <Contact data={contacts} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
