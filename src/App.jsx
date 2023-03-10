import React from "react";
import './App.css';
import ContactList from "./components/ContactList";
import Form from './components/Form';

class App extends React.Component {
    state = {
        contacts: [{id: 1, firstName: 'Jake', lastName: 'Jackson', phoneNumber: '+380501234567'},
                   {id: 2, firstName: 'Jacob', lastName: 'Menace', phoneNumber: '+380602334567'},
                   {id: 3, firstName: 'Master', lastName: 'Fu', phoneNumber: '+380901234567'},
                   {id: 4, firstName: 'Po', lastName: 'Panda', phoneNumber: '+380711234567'}],
        formVisible: false
    }

    deleteContact = (id) => {
        this.setState({ contacts: this.state.contacts.filter((contact) => contact.id !== id) });
    }

    addContact = (personData) => {
        this.setState({
            contacts: [...this.state.contacts,
                {
                    id: Date.now(), ...personData
                }]
        })
    }

    onChangeFormVisible = () => {
        this.setState({formVisible: !this.state.formVisible})
    }

  render(){
    return (
        <div className="App">
            <h1>Contacts</h1>
            <ContactList contacts={this.state.contacts} onDeleteContact={this.deleteContact}/>
            {this.state.formVisible ?
                <Form onAddContact={this.addContact} onHideForm={this.onChangeFormVisible}/>:
                <button onClick={this.onChangeFormVisible} className="show-form">Add contact</button>
            }
        </div>
    )
  }
}

export default App;
