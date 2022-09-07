import { useEffect, useState } from "react";
import styles from "../AddContact/AddContact.module.css";
import getOneContact from "../../services/getOneContactService";

const EditContact = ({ editContactHandler, history, match }) => {
  const [contact, setContact] = useState({ name: "", email: "" });

  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getOneContact(match.params.id);
        setContact({ name: data.name, email: data.email });
      } catch (error) {}
    };
    localFetch();
  }, []);

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    if (!contact.name || !contact.email) {
      alert("All fields are mandatory!!!");
      return;
    }
    e.preventDefault();
    editContactHandler(contact,match.params.id);
    setContact({ name: "", email: "" });
    history.push("/");
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
      <button type="submit">Edit</button>
    </form>
  );
};

export default EditContact;
