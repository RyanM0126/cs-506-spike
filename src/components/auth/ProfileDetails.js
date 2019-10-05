import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class ProfileUpdate extends Component {
  state = {
    firstName: this.props.profile.firstName,
    lastName: this.props.profile.lastName,
    email: this.props.profile.email,
    age: this.props.profile.age,
  };

  render() {
    if (!this.props.auth.uid) return <Redirect to="/signin" />;
    return (
        <div class="row">
        <div class="col s12 ">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">User Info</span>
              <div>
                  <p>{this.state.firstName}</p>
                  <p>{this.state.lastName}</p>
                  <p>Age: {this.state.age} years old</p>
                  <p>{this.state.email}</p>
              </div>
            </div>
          </div>
        </div>
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
