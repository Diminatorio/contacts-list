import React from "react";
import './ContactList.css'
import Contact from "../Contact";

class ContactList extends React.Component {


    render(){
        return (
            <div className="items-container">
                {this.props.contacts.map(item =>(
                    <Contact item={item}
                             key={item.id}
                             onDeleteContact={this.props.onDeleteContact}/>
                ))}
            </div>
        )
    }
}

export default ContactList;