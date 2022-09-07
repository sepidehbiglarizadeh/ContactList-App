import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <section className={styles.listWrapper}>
      <div className={styles.contactList}>
        <div className={styles.listHeader}>
          <h2>All Contacts</h2>
          <Link to="/add">
            <button className={styles.addBtn}>Add New Contact</button>
          </Link>
        </div>
        {contacts.map((contact) => {
          return <Contact contact={contact} onDelete={onDelete} key={contact.id}/>;
        })}
      </div>
    </section>
  );
};

export default ContactList;
