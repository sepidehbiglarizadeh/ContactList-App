import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <section className={styles.contactList}>
      <div>
        <Link to="/add">
          <button className={styles.addBtn}>Add New Contact</button>
        </Link>
        <h2>All Contacts</h2>
      </div>
      {contacts.map((contact) => {
        return (
          <Contact contact={contact} onDelete={onDelete}/>
        );
      })}
    </section>
  );
};

export default ContactList;
