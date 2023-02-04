import React from "react";
import './Contact.css';

function Contact ({onDeleteContact, item}) {
    const clickDelete = () => {
        onDeleteContact(item.id)
    }
    return (
        <div className="contact-div">
            <div className="text-container">
                <div>
                    <span>{item.name} </span>
                </div>
                <span>{item.phone.split(' ')[0]}</span>
            </div>

            <button className="delete-button" onClick={clickDelete}>Delete</button>
        </div>
    )
}

export default Contact;