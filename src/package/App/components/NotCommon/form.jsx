import React, { Component } from "react";
import { DatePicker, DatePickerInput } from "rc-datepicker";
import "moment/locale/it.js";
import "rc-datepicker/lib/style.css";

import Personal from "./personal_info";
import {
  Button,
  Nav,
  NavItem,
  Tab,
  Row,
  Col,
  PageHeader,
  Label
} from "react-bootstrap";

class form extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.formErrors;
    //this.onSubmit = this.onSubmit.bind(this);
  }

  // handleChange = e => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   let formErrors = { ...this.state.formErrors };

  //   switch (name) {
  //     case "firstName":
  //       formErrors.firstName =
  //         value.length < 3 ? "minimum 3 characaters required" : "";
  //       break;
  //     default:
  //       break;
  //   }
  //   this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  // };

  render() {
    //const { formErrors } = this.state;
    return (
      <div>
        <span>
          <PageHeader className="border" className="">
            <h1>
              <Label>Resume Builder</Label>
            </h1>
          </PageHeader>
        </span>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={2}>
              <Nav bsStyle="pills" stacked className="background">
                <NavItem eventKey="first">Login/LogOut</NavItem>
                <NavItem eventKey="second">SignUp</NavItem>
                <NavItem eventKey="third">Roles</NavItem>
                <NavItem eventKey="fourth">Personal Imformation</NavItem>
                <NavItem eventKey="fifth">Qualification</NavItem>
                <NavItem eventKey="sixth">Edit User</NavItem>
                <NavItem eventKey="seventh">List User</NavItem>
                <NavItem eventKey="eighth">Search Resume</NavItem>
              </Nav>
            </Col>
            <Col sm={8}>
              <Tab.Content animation>
                <Tab.Pane eventKey="first">Login Logout Page</Tab.Pane>
                <Tab.Pane eventKey="second">SignUp</Tab.Pane>
                <Tab.Pane eventKey="third">Roles</Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Personal
                    handleChange={this.props.handleChange}
                    onSubmit={e => this.props.submit(e)}
                    formErrors={this.props.formErrors}
                    firstName={this.props.firstName}
                    lastName={this.props.lastName}
                  />
                </Tab.Pane>

                <Tab.Pane eventKey="fifth">Qualification</Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <div />
                </Tab.Pane>
                <Tab.Pane eventKey="seventh">
                  <div />
                </Tab.Pane>
                <Tab.Pane eventKey="eighth">
                  <div />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default form;
