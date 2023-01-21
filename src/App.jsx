import React, {useState} from "react";
import useContacts from "./hooks/useContacts/useContacts";
import './App.css';
import ContactList from "./components/ContactList";
import Form from './components/Form';

function App () {
    const {contacts, deleteContact, addContact} = useContacts()

    const [formVisible, setFormVisible] = useState({formVisible: false});
    const onChangeFormVisible = () => {
        setFormVisible({formVisible: !formVisible.formVisible})
    }

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
