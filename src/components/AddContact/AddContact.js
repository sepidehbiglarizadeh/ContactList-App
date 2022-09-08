import { useState } from "react";
import addOneContact from "../../services/addOneContactService";
import styles from "./AddContact.module.css";

const AddContact = ({ addContactHandler, history }) => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    if (!contact.name || !contact.email) {
      alert("All fields are mandatory!!!");
      return;
    }
    e.preventDefault();
    try {
      await addOneContact(contact);
      setContact({ name: "", email: "" });
      history.push("/");
    } catch (error) {}
  };

  return (
    <form onSubmit={submitForm}>
      <div className={styles.formControl}>
        <label>Name : </label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={changeHandler}
        />
      </div>
      <div className={styles.formControl}>
        <label>Email : </label>
        <input
          type="text"
          name="email"
          value={contact.email}
          onChange={changeHandler}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddContact;
