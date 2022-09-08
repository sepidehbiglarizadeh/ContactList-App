import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import { Switch, Route } from "react-router-dom";

import EditContact from "./components/EditContact/EditContact";

const App = () => {
  return (
    <main className="app">
      <h1>Contact App</h1>
      <Switch>
        <Route path="/edit/:id" component={EditContact} />
        <Route path="/user/:id" component={ContactDetail} />
        <Route path="/add" component={AddContact} />
        <Route path="/" exact component={ContactList} />
      </Switch>
    </main>
  );
};

export default App;
