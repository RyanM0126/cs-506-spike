import React from 'react'
import moment from 'moment'

const HouseSummary = ({house}) => {
    return (
        <div className="card z-depth-0">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{house.title}</span>
                <p>Posted by {house.postersFirstName} {house.posterLastName}</p>
                <p>Rent: ${house.rent}/month</p>
                <p className='grey-text'>{moment(house.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default HouseSummary