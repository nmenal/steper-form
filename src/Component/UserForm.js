import React, { Component } from "react";
import Confirm from "./Confirm";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";
import Succes from "./Succes";
export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  nextStep = () => {
    this.setState({ step: this.state.step + 1 });
  };
  previousStep = () => {
    this.setState({ step: this.state.step - 1 });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            values={values}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            values={values}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
          />
        );
      case 3:
        return (
          <Confirm
            values={values}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
          />
        );
      case 4:
        return <Succes />;
      default:
        break;
    }
  }
}

export default UserForm;
