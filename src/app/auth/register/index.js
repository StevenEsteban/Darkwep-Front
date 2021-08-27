import React, { Component } from 'react';
import { GetUserLogin } from '../../components/services';
import { NotificationManager } from "react-notifications";

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName:null,
            lastName:null,
            email: null,
            password: null,
            formErrors: {
                firstName:"",
                lastName:"",
                email: "",
                password: ""
            }
        };
    }
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
        switch (name) {
            case "first_name":
                formErrors.firstName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "last_name":
                formErrors.lastName =
                value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "password":
                formErrors.password =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        let { firstName, lastName, email, password } = this.state;
        let data = {first_name: firstName, last_name:lastName, email:email, password:password }
        if (formValid(this.state)) {
         GetUserLogin.getUserRegister(data);
          let a = data
          console.log(a)
        
          if(a){
            NotificationManager.success("Successfully Added New User");
            window.location.href="/login" 
          }
         
        } else{
            NotificationManager.error("Please check your Register", "Input Error");
          }

    }
    render() {
        let { firstName, lastName, email, password, formErrors } = this.state;

        return (
            <div>
                <h5 className="heading-design-h5">Register Now!</h5>
                <fieldset className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" name="firstName" value={firstName} onChange={this.handleChange}  />
                    {formErrors.firstName.length > 0 && (
                        <span className="errorMessage">{formErrors.firstName}</span>
                    )}
                </fieldset>
                <fieldset className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" name="lastName" value={lastName} onChange={this.handleChange}  />
                    {formErrors.firstName.length > 0 && (
                        <span className="errorMessage">{formErrors.lastName}</span>
                    )}
                </fieldset>
                <fieldset className="form-group">
                    <label>Enter Email</label>
                    <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange}  />
                    {formErrors.email.length > 0 && (
                        <span className="errorMessage">{formErrors.email}</span>
                    )}
                </fieldset>
                <fieldset className="form-group">
                    <label>Enter Password</label>
                    <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange}  />
                    {formErrors.password.length > 0 && (
                        <span className="errorMessage">{formErrors.password}</span>
                      )}
                </fieldset>
                {/* <fieldset className="form-group">
                    <label>Enter Confirm Password </label>
                    <input type="password" className="form-control" placeholder="********" />
                </fieldset> */}
                <fieldset className="form-group">
                    <button type="submit" className="btn btn-lg btn-secondary btn-block" onClick={this.handleSubmit}>Create Your Account</button>
                </fieldset>
               
            </div>
        )
    }
}
