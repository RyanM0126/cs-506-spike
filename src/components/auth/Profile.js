import React, { Component } from "react";
import ProfileUpdate from "./ProfileUpdate";
import ProfileDetails from "./ProfileDetails"

class Profile extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    authError: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <ProfileDetails />
        <ProfileUpdate />
      </div>
    );
  }
}

export default Profile;
