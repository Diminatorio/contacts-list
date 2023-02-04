import React from "react";
import './App.css';
import ContactList from "./components/ContactList";
import Form from './components/Form';
import useForm from "./hooks/useForm/useForm";
import useReduxContacts from "./hooks/useReduxContacts/useReduxContacts";

function App () {
    const {contacts, onCreateContact, onDeleteContact} = useReduxContacts()

    const {formVisible, onChangeFormVisible} = useForm()

    return (
        <div className="App">
            <h1>Contacts</h1>
            <ContactList contacts={contacts} onDeleteContact={onDeleteContact}/>
            {formVisible.formVisible ?
                <Form onAddContact={onCreateContact} onHideForm={onChangeFormVisible}/>:
                <button onClick={onChangeFormVisible} className="show-form">Add contact</button>
            }
        </div>
    )

}

export default App;
