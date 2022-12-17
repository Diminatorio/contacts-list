import React from "react";
import './Form.css'
import TextInput from "../TextInput";


class Form extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        phoneNumber: ''
    }


    onInputChange = (ev) => {
        const { value, name } = ev.target;
        this.setState({
            ...this.state,
            [name]: value,
        });
    }

    onAddContact = (ev) => {
        ev.preventDefault(); // stop sending form data
        const regex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/ //phone number regExp
        if (regex.test(this.state.phoneNumber)) {
            this.props.onAddContact(this.state); //add contact
            this.resetForm(); //reset form
            this.props.onHideForm() //hide form
        } else {
            this.setState({phoneNumber: 'Invalid Number'}) // change phoneNumber input to invalid text
        }

    }

    resetForm = () => { //just reset form
        this.setState({ firstName: '',
                             lastName: '',
                             phoneNumber: ''})
    }

    render(){
        return (
            <>
                <form onSubmit={this.onAddContact} onReset={this.resetForm} className="form">
                    <div className="text-inputs-container">
                        <TextInput name="firstName"
                                   placeholder="First name"
                                   value={this.state.firstName}
                                   onInputChange={this.onInputChange}/>
                        <TextInput name="lastName"
                                   placeholder="Last name"
                                   value={this.state.lastName}
                                   onInputChange={this.onInputChange}/>
                        <TextInput name="phoneNumber"
                                   placeholder="Phone number"
                                   value={this.state.phoneNumber}
                                   onInputChange={this.onInputChange}/>
                    </div>
                    <div className="buttons-container">
                        <input className="button submit" type="submit" value="Add"
                               disabled={  // if each field is empty - the button is disabled, else - not
                            !(this.state.firstName !== ''
                                && this.state.lastName !== ''
                                && this.state.phoneNumber !=='')? 'true': ''}
                        />
                        <input className="button reset" type="reset" value="Clear"/> {/*to reset data*/}
                    </div>
                    <button className="button close" onClick={this.props.onHideForm}>Cancel</button> {/*cancel adding*/}

                </form>

            </>
        )
    }
}

export default Form;