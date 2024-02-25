import React from "react";
import CommonSection from "../shared/CommonSection";
import { BASE_URL } from "../utils/config";
import useFetch from "../hooks/useFetch"
const Bookings = () => {
  const bookings = 
    useFetch(`${BASE_URL}/bookings`);
  
  console.log(bookings);
  return (
    <>
      <CommonSection title={"Bookings"} />
      {/* {bookings?.map((book)=>{<div>{book}</div>})}; */}
      
    </>
  );
};

export default Bookings;
