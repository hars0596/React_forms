import React, { Component } from "react";
//import logo from './logo.svg';
//import "./App.css";
import Forms from "/home/digimantra/hr-recruiter/Resume_Fe/src/package/App/components/NotCommon/form.jsx";
import "/home/digimantra/hr-recruiter/Resume_Fe/src/package/App/styles/App.css";
class App extends Component {
  state = {
    fields: {
      firstName: "",
      lastName: ""
    },
    formErrors: {
      firstName: "",
      lastName: ""
    }
  };

  onSubmit = updatedValue => {
    updatedValue.preventDefault();
    this.setState({
      fields: {
        firstName: updatedValue
      }
    });
    // console.log("App comp got:", fields);
  };
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      default:
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  submit = e => {
    this.onSubmit({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { formErrors } = this.state;
    return (
      <div className="App">
        <Forms
          onSubmit={fields => this.onSubmit(fields)}
          handleChange={e => this.handleChange(e)}
          submit={e => this.submit(e)}
          formErrors={this.state.formErrors}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
        />
        <p>{JSON.stringify(this.state.fields)}</p>
      </div>
    );
  }
}

export default App;
