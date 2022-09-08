import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import deleteOneContact from "../../services/deleteOneContactService";
import getContacts from "../../services/getContactsService";
import Contact from "./Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ onDelete }) => {
  const [contacts, setContacts] = useState(null);
  const [allContacts,setAllContacts]= useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
      setAllContacts(data)
    };
    fetchContacts();
  }, []);

  const deleteContactHandler = async (id) => {
    try {
      await deleteOneContact(id);
      const filteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
    } catch (error) {}
  };

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    if(searchTerm !== ""){
      const filteredContacts = allContacts.filter((c) => {
        return Object.values(c)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setContacts(filteredContacts);
    }else{
      setContacts(allContacts);
    }
  };

  return (
    <section className={styles.listWrapper}>
      <div className={styles.contactList}>
        <div className={styles.listHeader}>
          <h2>All Contacts</h2>
          <Link to="/add">
            <button className={styles.addBtn}>Add New Contact</button>
          </Link>
        </div>
        <div>
          <input
            className={styles.searchInput}
            type="search"
            placeholder="search..."
            value={searchTerm}
            onChange={searchHandler}
          />
        </div>
        {contacts ? (
          contacts.map((contact) => {
            return (
              <Contact
                contact={contact}
                onDelete={deleteContactHandler}
                key={contact.id}
              />
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default ContactList;
