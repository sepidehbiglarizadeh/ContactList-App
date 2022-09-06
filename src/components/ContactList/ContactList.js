import styles from "./ContactList.module.css";
import { FaTrashAlt, FaUserAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <section className={styles.contactList}>
      {contacts.map((contact) => {
        const { name, email, id } = contact;
        return (
          <div key={id} className={styles.item}>
            <div className={styles.item__content}>
              <IconContext.Provider value={{ className: "userIcon" }}>
                <FaUserAlt />
              </IconContext.Provider>
              <div className={styles.item__text}>
                <p>Name : {name}</p>
                <p>Email: {email}</p>
              </div>
            </div>
            <IconContext.Provider value={{ className: "deleteContactIcon" }}>
              <FaTrashAlt onClick={() => onDelete(id)} />
            </IconContext.Provider>
          </div>
        );
      })}
    </section>
  );
};

export default ContactList;
