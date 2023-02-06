import {useSelector, useDispatch} from "react-redux";
import {
    CONTACTS_URL,
    createContact,
    deleteContact, fetchContacts,
} from "../../store/actions/contactsAction";
import {useEffect} from "react";
import store from "../../store";

export default function useReduxContacts() {
    const dispatch = useDispatch()

    let notFirst = 0

    useEffect(() => {

        if (!notFirst) {
            if (localStorage.getItem('contacts')) {
                if (JSON.parse(localStorage.getItem('contacts')).contacts.length) {
                    const localData = JSON.parse(localStorage.getItem('contacts')).contacts
                    fetch(CONTACTS_URL, {
                        method:'POST',
                        body: JSON.stringify(localData),
                        headers: {'Content-Type': 'application/json'}
                    })
                } else {
                    dispatch(fetchContacts())
                }
            } else {
                dispatch(fetchContacts())
            }
        }
        notFirst++
        return () => {
            localStorage.setItem('contacts', JSON.stringify(store.getState()))
        }
    }, [])

    store.subscribe(() => localStorage.setItem('contacts', JSON.stringify(store.getState())))

    const {contacts} = useSelector(state => ({
        contacts: state.contacts
    }))
    const onCreateContact = (personData) => {
        dispatch(createContact(personData))
    }
    const onDeleteContact = (id) => {
        dispatch(deleteContact(id))
    }

    return {
        contacts, onCreateContact, onDeleteContact
    }
}