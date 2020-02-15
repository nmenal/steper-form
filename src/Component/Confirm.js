import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault()
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault()
    this.props.previousStep();
  };
  render() {
    const { values } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm your Details"></AppBar>
          <List>
            <ListItem
              primaryText="Firstname"
              secondaryText={values.firstName}
            />
            <ListItem primaryText="Lastname" secondaryText={values.lastName} />
            <ListItem primaryText="Email" secondaryText={values.email} />
            <ListItem
              primaryText="Occupation"
              secondaryText={values.occupation}
            />
            <ListItem primaryText="City" secondaryText={values.city} />
            <ListItem primaryText="Bio" secondaryText={values.bio} />
          </List>
          <br />
          <RaisedButton
            label="Back"
            primary={true}
            style={styles.button}
            onClick={this.back}
          />
          <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Confirm;
