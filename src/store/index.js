import {applyMiddleware, createStore} from 'redux'
import thunk from "redux-thunk";
import {contactsReducer} from "./reducers/contactsReducer";

export const store = createStore(contactsReducer, applyMiddleware(thunk))

export default store