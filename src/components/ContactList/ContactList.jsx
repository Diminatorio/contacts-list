import React from "react";
import './ContactList.css'
import Contact from "../Contact";

function ContactList ({contacts, onDeleteContact}) {
    return (
        <div className="items-container">
            {contacts.map(item =>(
                <Contact item={item}
                         key={item.id}
                         onDeleteContact={onDeleteContact}/>
            ))}
        </div>
    )
}

export default ContactList;