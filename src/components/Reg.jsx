import React, { Component } from 'react'
import InputField from './form-elements/InputField';
const initialState = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address1: "",
    address2: "",
    phone: ""
  }
 class Reg extends Component {
     state = initialState;
     changeHandler = e => {
        const { name, value } = e.target;
        console.log(name, ":", value);
        this.setState({
            [name]: value
        })
     }
     handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
     }
        render() {
        return (
            <div>
                <div className="wraper">
                    <form className="grid" onSubmit={this.handleSubmit}>
                        <h4 className="upper">Member Login</h4>
          <InputField
            name="name"
            placeholder="Name"
            changeHandler={this.changeHandler}
            value={this.state.name}
          />
          <InputField
            name="lastName"
            placeholder="Last Name"
            changeHandler={this.changeHandler}
            value={this.state.lastName}
          />
          <InputField
            name="email"
            placeholder="Email"
            changeHandler={this.changeHandler}
            value={this.state.email}
          />
          <InputField
          name="password"
          placeholder="Password"
          changeHandler={this.changeHandler}
          value={this.state.password}
        />
        <InputField
            name="confirmPassword"
            placeholder="Confirm Password"
            changeHandler={this.changeHandler}
            value={this.state.confirmPassword}
          />
          <InputField
            name="address1"
            placeholder="Address1"
            changeHandler={this.changeHandler}
            value={this.state.address1}
          />
          <InputField
            name="address2"
            placeholder="Address2"
            changeHandler={this.changeHandler}
            value={this.state.address2}
          />
          <InputField
            name="phone"
            placeholder="Phone"
            changeHandler={this.changeHandler}
            value={this.state.phone}
          />
          <button className="btn-primary">Register</button>
          </form>
            </div>
        </div>
        )
    }
}
export default Reg