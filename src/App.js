import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import { Switch, Route } from "react-router-dom";
import getContacts from "./services/getContactsService";
import deleteOneContact from "./services/deleteOneContactService";
import addOneContact from "./services/addOneContactService";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
    };

    fetchContacts();
  }, []);

  const addContactHandler = async (contact) => {
    try {
      const { data } = await addOneContact(contact);
      setContacts([...contacts, data]);
    } catch (error) {}
  };

  const deleteContactHandler = async (id) => {
    try {
      await deleteOneContact(id);
      const filteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
    } catch (error) {}
  };

  return (
    <main className="app">
      <h1>Contact App</h1>
      <Switch>
        <Route path="/user/:id" component={ContactDetail} />
        <Route
          path="/add"
          render={(props) => (
            <AddContact addContactHandler={addContactHandler} {...props} />
          )}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <ContactList
              contacts={contacts}
              onDelete={deleteContactHandler}
              {...props}
            />
          )}
        />
      </Switch>
      {/* <AddContact addContactHandler={addContactHandler} /> */}
      {/* <ContactList contacts={contacts} onDelete={deleteContactHandler} /> */}
    </main>
  );
};

export default App;
