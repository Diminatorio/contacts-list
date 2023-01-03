import React from "react";
import './ContactList.css'
import Contact from "../Contact";

function ContactList (props) {
    return (
        <div className="items-container">
            {props.contacts.map(item =>(
                <Contact item={item}
                         key={item.id}
                         onDeleteContact={props.onDeleteContact}/>
            ))}
        </div>
    )
}

export default ContactList;