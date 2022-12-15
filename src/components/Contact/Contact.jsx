import React from "react";
import './Contact.css';

class Contact extends React.Component {

    clickDelete = () => {
        this.props.onDeleteContact(this.props.item.id)
    }

    render(){
        return (
            <div className="contact-div">
                <div className="text-container">
                    <div>
                        <span>{this.props.item.firstName} </span>
                        <span>{this.props.item.lastName}</span>
                    </div>
                    <span>{this.props.item.phoneNumber}</span>
                </div>

                <button className="delete-button" onClick={this.clickDelete}>Delete</button>
            </div>
        )
    }
}

export default Contact;