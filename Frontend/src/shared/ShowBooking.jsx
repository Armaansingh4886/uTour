import React from "react";
import "./ShowBooking.css";

const ShowBooking = (props) => {
  return (
    <>
      {/* <h2>
      {props.data.tourName}</h2>
      <h5>
      {props.data.fullName}</h5>
      <p>
      {props.data.guestSize}</p> */}

      <div
        style={{
          background: "url(tour-images/tour-img01.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="tour-card">
          <div class="tour-info">
            <h2>{props.data.tourName}</h2>
            <p>Guest Size: {props.data.guestSize}</p>
            <p>
              Booked with the name of <u>{props.data.fullName}</u>{" "}
            </p>
            <p>Date Booked: {props.data.bookAt}</p>
          </div>
          <div class="tour-actions">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowBooking;
