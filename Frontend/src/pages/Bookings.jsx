import React from "react";
import CommonSection from "../shared/CommonSection";
import { BASE_URL } from "../utils/config";
import useFetch from "../hooks/useFetch"
import ShowBooking from "../shared/ShowBooking";
import "../styles/bookings.css"
const Bookings = () => {
  const bookings =   useFetch(`${BASE_URL}/bookings`,{method:'get',
  headers:{
    'content-type':'application/json'
  },
  credentials:'include',});
  
  console.log(bookings.data);
  return (
    <>
      <CommonSection title={"Bookings"} />
      <section className="bookings">
        
      {bookings.data?.map((book)=>{return  <><ShowBooking data={book}/> </>})}
      </section>
    
      
    </>
  );
};

export default Bookings;
