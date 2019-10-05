import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";

class ProfileUpdate extends Component {
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
    const { email, password, firstName, lastName } = this.state;
    let { auth, profile } = this.props;

    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser;

    if (email) {
      user
        .updateEmail(email)
        .then(console.log("updated email"))
        .catch(error =>
          this.setState({
            authError: error
          })
        );
    }

    if (password) {
      user
        .updatePassword(password)
        .then(console.log("updated password"))
        .catch(error =>
          this.setState({
            authError: error
          })
        );
    }

    if (firstName) {
      profile.firstName = firstName;
    }

    if (lastName) {
      profile.lastName = lastName;
    }

    if (profile.firstName && profile.lastName)
      profile.initials = profile.firstName[0] + profile.lastName[0];

    if (firstName || lastName) {
      firestore
        .collection("users")
        .doc(auth.uid)
        .update({
          ...profile
        })
        .then(console.log("name updated"))
        .catch(error =>
          this.setState({
            authError: error
          })
        );
    }
  };

  render() {
    if (!this.props.auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Update Profile</h5>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn red lighten-1 z-depth-0">Update</button>
            <div className="center red-text">
              {this.state.authError ? (
                <p>{this.state.authError.message}</p>
              ) : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(ProfileUpdate);
