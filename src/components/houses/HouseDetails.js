import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const HouseDetails = (props) => {
    const { house, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />

    if (house) {
        return (
            <div className="container section">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{ house.title }</span>
                        <p>{ house.content }</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by { house.postersFirstName } { house.postersLastName }</div>
                        <div>{moment(house.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => { 
    const id = ownProps.match.params.id;
    const houses = state.firestore.data.houses;
    const house = houses ? houses[id] : null
    return {
        house: house,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'houses'
    }])
)(HouseDetails)
