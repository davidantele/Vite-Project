import { useState } from "react";
import ContactList from "./components/ContactList";
import selectedContactId from "react";
import "./App.css";

export default function App() {
  Const[(selectedContactId, setSelectedContactId)] = useState(null);

  return (
    <>
      {selectedContactId ? <div>Selected Contact Views</div> : <ContactList />}
    </>
  );
}
