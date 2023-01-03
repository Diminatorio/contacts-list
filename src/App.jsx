import React, {useState} from "react";
import './App.css';
import ContactList from "./components/ContactList";
import Form from './components/Form';

function App () {
    const [contacts, setContact] = useState({contacts: [
            {id: 1, firstName: 'Jake', lastName: 'Jackson', phoneNumber: '+380501234567'},
            {id: 2, firstName: 'Jacob', lastName: 'Menace', phoneNumber: '+380602334567'},
            {id: 3, firstName: 'Master', lastName: 'Fu', phoneNumber: '+380901234567'},
            {id: 4, firstName: 'Po', lastName: 'Panda', phoneNumber: '+380711234567'}]});

    const [formVisible, setFormVisible] = useState({formVisible: false});

    const deleteContact = (id) => {
        setContact({ contacts: contacts.contacts.filter((contact) => contact.id !== id) });
    }

    const addContact = (personData) => {
        setContact({
            contacts: [...contacts.contacts,
                {id: Date.now(), ...personData}]
        });
    }

    const onChangeFormVisible = () => {
        setFormVisible({formVisible: !formVisible.formVisible})
    }

    return (
        <div className="App">
            <h1>Contacts</h1>
            <ContactList contacts={contacts.contacts} onDeleteContact={deleteContact}/>
            {formVisible.formVisible ?
                <Form onAddContact={addContact} onHideForm={onChangeFormVisible}/>:
                <button onClick={onChangeFormVisible} className="show-form">Add contact</button>
            }
        </div>
    )

}

export default App;
