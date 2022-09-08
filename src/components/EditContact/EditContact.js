import { useEffect, useState } from "react";
import styles from "../AddContact/AddContact.module.css";
import getOneContact from "../../services/getOneContactService";
import updateContact from "../../services/updateContactService";

const EditContact = ({ history, match }) => {
  const [contact, setContact] = useState({ name: "", email: "" });

  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getOneContact(match.params.id);
        setContact({ name: data.name, email: data.email });
      } catch (error) {}
    };
    localFetch();
  },[]);

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async(e) => {
    if (!contact.name || !contact.email) {
      alert("All fields are mandatory!!!");
      return;
    }
    e.preventDefault();
    try {
      await updateContact(contact, match.params.id);
      history.push("/");
      setContact({ name: "", email: "" });
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
      <button type="submit">Edit</button>
    </form>
  );
};

export default EditContact;
