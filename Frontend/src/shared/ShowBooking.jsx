import React from 'react'
import "./ShowBooking.css"

const ShowBooking = (props) => {
  return (
    <div className='booking-list'>
      <h2>
      {props.data.tourName}</h2>
      <h5>
      {props.data.fullName}</h5>
      <p>
      {props.data.guestSize}</p>
    </div>
  )
}

export default ShowBooking
