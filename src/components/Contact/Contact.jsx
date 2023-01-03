import React from "react";
import './Contact.css';

function Contact (props) {
    const clickDelete = () => {
        props.onDeleteContact(props.item.id)
    }

    return (
        <div className="contact-div">
            <div className="text-container">
                <div>
                    <span>{props.item.firstName} </span>
                    <span>{props.item.lastName}</span>
                </div>
                <span>{props.item.phoneNumber}</span>
            </div>

            <button className="delete-button" onClick={clickDelete}>Delete</button>
        </div>
    )
}

export default Contact;