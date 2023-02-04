import React, {useState} from "react";
import './Form.css'
import TextInput from "../TextInput";

function Form (props) {
    const [formState, setFormState] = useState({
                                                firstName: '',
                                                lastName: '',
                                                phone: ''})

    const onInputChange = (ev) => {
        const { value, name } = ev.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const onAddContact = (ev) => {
        ev.preventDefault(); // stop sending form data
        const regex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/ //phone number regExp
        if (regex.test(formState.phone)) {
            props.onAddContact(formState); //add contact
            resetForm(); //reset form
            props.onHideForm() //hide form
        } else {
            setFormState({
                firstName:formState.firstName,
                lastName: formState.lastName,
                phone: 'Invalid Number'
            }) // change phone input to invalid text
        }
    }

    const resetForm = () => { //just reset form
        setFormState({
            firstName: '',
            lastName: '',
            phone: ''})
    }

    return (
        <>
            <form onSubmit={onAddContact} onReset={resetForm} className="form">
                <div className="text-inputs-container">
                    <TextInput name="firstName"
                               placeholder="First name"
                               value={formState.firstName}
                               onInputChange={onInputChange}/>
                    <TextInput name="lastName"
                               placeholder="Last name"
                               value={formState.lastName}
                               onInputChange={onInputChange}/>
                    <TextInput name="phone"
                               placeholder="Phone number"
                               value={formState.phone}
                               onInputChange={onInputChange}/>
                </div>
                <div className="buttons-container">
                    <input className="button submit" type="submit" value="Add"
                           disabled={  // if each field is empty - the button is disabled, else - not
                               !(formState.firstName !== ''
                                   && formState.lastName !== ''
                                   && formState.phone !=='')? true: ''}
                    />
                    <input className="button reset" type="reset" value="Clear"/> {/*to reset data*/}
                </div>
                <button className="button close" onClick={props.onHideForm}>Cancel</button> {/*cancel adding*/}

            </form>

        </>
    )

}

export default Form;