import React from "react";
import CommonSection from "../shared/CommonSection";
import { BASE_URL } from "../utils/config";
import useFetch from "../hooks/useFetch"
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
      {/* {bookings.data?.map((book)=>{return <div>this</div>})}; */}
     
      
    </>
  );
};

export default Bookings;
