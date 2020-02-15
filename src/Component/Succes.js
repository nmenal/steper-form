import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class FormUserDetails extends Component {
  continue = () => {
    this.props.nextStep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Succes"></AppBar>
          <h1>Thanks for submiting your informations</h1>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
