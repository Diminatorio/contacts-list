import {useEffect, useState} from "react";

export default function useContacts() {
    const [contacts, setContact] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(data => setContact(data))
    }, [])



    const deleteContact = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE'
        })
        const newContact = contacts.filter(contact => contact.id !== id)
        setContact(newContact);
    }

    const addContact = (personData) => {
        const phone = personData.phone
        const name = `${personData.firstName} ${personData.lastName}`
        personData = {id: Date.now(), name, phone}

        fetch(`https://jsonplaceholder.typicode.com/users`,{
            method: "POST",
            body: JSON.stringify(personData),
            headers: {'Content-Type': 'application/json'}
        })
            .then(resp => resp.json())
            .then(data => setContact([...contacts, data]))
    }
    return {
        contacts, deleteContact, addContact
    }
}