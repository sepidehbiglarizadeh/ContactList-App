import styles from "../ContactList.module.css";
import { FaTrashAlt, FaUserAlt, FaEdit } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Contact = ({ contact, onDelete }) => {
  const { name, email, id } = contact;
  return (
    <div className={styles.item}>
      <div className={styles.item__content}>
        <IconContext.Provider value={{ className: "userIcon" }}>
          <FaUserAlt />
        </IconContext.Provider>
        <Link to={{ pathname: `user/${id}`, state: { contact } }}>
          <div className={styles.item__text}>
            <p>Name : {name}</p>
            <p>Email: {email}</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to={`/edit/${id}`}>
          <IconContext.Provider value={{ className: "editContactIcon" }}>
            <FaEdit />
          </IconContext.Provider>
        </Link>
        <IconContext.Provider value={{ className: "deleteContactIcon" }}>
          <FaTrashAlt onClick={() => onDelete(id)} />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Contact;
