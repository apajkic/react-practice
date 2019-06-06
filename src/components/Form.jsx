import React, { Component } from "react";
import InputField from "./form-elements/InputField";
import SelectField from "./form-elements/SelectField";
const city = ["Londra", "Parigia", "Belgrado"];

const initialState = {
  name: "TestName",
  state: "TestState",
  password: "TestPassword",
  isRemote: false,
  location: "TestLocation"
}
class Form extends Component {
  state = initialState;
  changeHandler = e => {
    const { type, name, value, checked } = e.target;
    if (type === "checkbox") {
      console.log(name, ":", checked);
      this.setState({
        [name]: checked
      })
    } else {
      console.log(name, ":", value);
      this.setState({
        [name]: value
      })
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="wraper">
        <form className="grid" onSubmit={this.handleSubmit}>
          <h4 className="upper">Member Login</h4>
          <InputField
            name="email"
            placeholder="email"
            changeHandler={this.changeHandler}
            value={this.state.name}
          />
          <InputField
            name="password"
            placeholder="password"
            changeHandler={this.changeHandler}
            value={this.state.password}
          />
          <a href="home.html">
            <button className="upper btn-primary" >Sign In</button>
          </a>
          <div className="no-signin">
                <div className="grid-span">
                  <span className="left"><input type="checkbox"/>Remember me
                  </span>
                  <span className="right">
                      Don't have an account?
                  </span>
                </div>
                <div className="grid-span">
                  <span className="left">
                      <a href="#">Forgot Password?</a>
                  </span>
                  <span className="right signup upper"><a href="#">Sign Up</a></span>
                </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
