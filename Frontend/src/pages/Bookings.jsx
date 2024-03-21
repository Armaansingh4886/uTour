import React, { useState,useContext, useEffect } from "react";
import ShowBooking from "../shared/ShowBooking";
import "../styles/bookings.css"

import CommonSection from "../shared/CommonSection";
import {AuthContext} from '../context/AuthContext'
import {BASE_URL} from '../utils/config'

const Bookings = () => {

const [list,setList ]= useState("");
  
  const {user} = useContext(AuthContext)
  let result;
 
  const handleClick = async () => {
   
// const 


try {
  if(!user || user===undefined || user === null){
    return alert('Please sign in first')
  }

  const res = await fetch(`${BASE_URL}/bookings`,{
    method:'get',
headers:{
  'content-type':'application/json'
},
credentials:'include',
// body:JSON.stringify(booking)
})

const result = await res.json()
setList(result.data)
// console.log(result.data);
return result
if(!res.ok){
  return alert(result.message)
}
    // navigate("/thank-you");
} catch (err) {
  console.log(err.message);
  alert(err.message)
  // navigate("/thank-you");

}

  };
  useEffect(()=>{ handleClick()},[])
 
  console.log(list);
  return (
    <>
    
      <CommonSection title={"Bookings"} />
      <section className="bookings">
        
      {list&&(list?.map((book)=>{return  <><ShowBooking data={book}/> </>}))}
      {/* <ShowBooking/> */}
      </section>
    
      
    </>
  )
}

export default Bookings
