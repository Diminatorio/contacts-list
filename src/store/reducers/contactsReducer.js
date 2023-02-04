import {
    ACTION_CREATE_CONTACT,
    ACTION_DELETE_CONTACT,
    ACTION_SET_CONTACT,
} from "../actions/contactsAction";

const initialState = localStorage.getItem('contacts') ?
    JSON.parse(localStorage.getItem('contacts')):
    {contacts: []}

export const contactsReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case ACTION_DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== payload)
            }
        case ACTION_CREATE_CONTACT:
            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    payload
                ]
            }
        case ACTION_SET_CONTACT:
            return {
                contacts: payload
            }
        default: return state
    }
}