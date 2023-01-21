import React from "react";
import useContacts from "./hooks/useContacts/useContacts";
import './App.css';
import ContactList from "./components/ContactList";
import Form from './components/Form';
import useForm from "./hooks/useForm/useForm";

function App () {
    const {contacts, deleteContact, addContact} = useContacts()
    const {formVisible, onChangeFormVisible} = useForm()

    return (
        <div className="App">
            <h1>Contacts</h1>
            <ContactList contacts={contacts} onDeleteContact={deleteContact}/>
            {formVisible.formVisible ?
                <Form onAddContact={addContact} onHideForm={onChangeFormVisible}/>:
                <button onClick={onChangeFormVisible} className="show-form">Add contact</button>
            }
        </div>
    )

}

export default App;
