import React, { Component } from "react";
import "/home/digimantra/hr-recruiter/Resume_Fe/src/package/App/styles/App.css";

class personal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const { fields } = this.props;
    return (
      <div className="wrapper">
        <form onSubmit={e => this.props.onSubmit(e)} noValidate>
          <div className="form-wrapper">
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                placeholder="First Name"
                value={this.props.firstName}
                className={
                  this.props.formErrors.firstName.length > 0 ? "error" : null
                }
                type="text"
                name="firstName"
                noValidate
                onChange={this.props.handleChange}
                onSubmit={e => this.props.onSubmit(e)}
              />
              {this.props.formErrors.firstName.length > 0 && (
                <span className="errorMessage">
                  {this.props.formErrors.firstName}
                </span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                placeholder="Last Name"
                value={this.props.lastName}
                type="text"
                name="lastName"
                noValidate
                onChange={this.props.handleChange}
                onSubmit={e => this.props.onSubmit(e)}
              />
              {this.props.formErrors.lastName.length > 0 && (
                <span className="errorMessage">
                  {this.props.formErrors.lastName}
                </span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default personal;
