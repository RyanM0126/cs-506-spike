import React, { Component } from "react";
import HouseList from "../houses/HouseList";
import { connect } from "react-redux"; //connects dashboard with redux store
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { houses } = this.props;
    return (
      <div className="dashboard container">
        <HouseList houses={houses} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    houses: state.firestore.ordered.houses,
    auth: state.firebase.auth
  };
};

// firestoreConnect will connect us to our database
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'houses', orderBy: ["createdAt", "desc"] }])
)(Dashboard);
