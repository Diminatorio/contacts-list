import React from "react";
import './Form.css'


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
        ev.preventDefault();
        const regex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/
        if (regex.test(this.state.phoneNumber)) {
            this.props.onAddContact(this.state);
            this.resetForm();
            this.props.onHideForm()
        } else {
            this.setState({phoneNumber: 'Invalid Number'})
        }

    }

    resetForm = () => {
        this.setState({ firstName: '',
                             lastName: '',
                             phoneNumber: ''})
    }

    render(){
        return (
            <>
                <form onSubmit={this.onAddContact} onReset={this.resetForm} className="form">
                    <div className="text-inputs-container">
                        <input type="text"
                               name="firstName"
                               placeholder="First name"
                               required
                               value={this.state.firstName}
                               onChange={this.onInputChange}/>
                        <input type="text"
                               name="lastName"
                               placeholder="Last name"
                               required
                               value={this.state.lastName}
                               onChange={this.onInputChange}/>
                        <input type="text"
                               name="phoneNumber"
                               placeholder="Phone number"
                               required
                               value={this.state.phoneNumber}
                               onChange={this.onInputChange}/>
                    </div>
                    <div className="buttons-container">
                        <input className="button submit" type="submit" value="Add"
                               disabled={
                            !(this.state.firstName !== ''
                                && this.state.lastName !== ''
                                && this.state.phoneNumber !=='')? 'true': ''}
                        />
                        <input className="button reset" type="reset" value="Clear"/>
                    </div>
                    <button className="button close" onClick={this.props.onHideForm}>Cancel</button>

                </form>

            </>
        )
    }
}

export default Form;