import React, { useContext, useEffect } from "react";
import CommonSection from "../shared/CommonSection";
import { BASE_URL } from "../utils/config";
import useFetch from "../hooks/useFetch"
import ShowBooking from "../shared/ShowBooking";
import {AuthContext} from '../context/AuthContext'
import "../styles/bookings.css"
import { Navigate } from "react-router-dom";

const Bookings = () => {



  const {user} = useContext(AuthContext)

//   const bookings =   useFetch(`${BASE_URL}/bookings`,{method:'get',
//   headers:{
//     'content-type':'application/json'
//   },
//   credentials:'include',});

// console.log(bookings);
let bookings

async function  getdata(){

  const res = await fetch(`${BASE_URL}/bookings`,{
        method:'get',
    headers:{
      'content-type':'application/json'
    },
    credentials:'include',
    })
    return await res.json()
}

useEffect(()=>{
// // console.log("fe");

try {
  if(!user || user===undefined || user === null){
    
    return alert('Please sign in first')

  }
  // const a =( async()=>{return await getdata()})(); 
  const ab = async()=>{
    const res = await fetch(`${BASE_URL}/bookings`,{
      method:'get',
  headers:{
    'content-type':'application/json'
  },
  credentials:'include',
  })
  // return await res.json()
  const result =  await res.json();
  return result;
    // return await getdata()
  }
  // // const res = getdata();
  console.log(ab()); 

  
//   const res =  await fetch(`${BASE_URL}/bookings`,{
//     method:'get',
// headers:{
//   'content-type':'application/json'
// },
// credentials:'include',
// })

// bookings = await res.json()
// bookings = res;
// console.log(bookings);
// if(!res.ok){
//   return alert(bookings.message)
// }
} catch (err) {
  // console.log(err.message);
  // alert(err.message)
//   // navigate("/thank-you");

}

},[user])



  
  // console.log(bookings);
  return (
    <>
      <CommonSection title={"Bookings"} />
      <section className="bookings">
        
      {/* {bookings.data?.map((book)=>{return  <><ShowBooking data={book}/> </>})} */}
      {/* <ShowBooking/> */}
      </section>
    
      
    </>
  );
};

export default Bookings;
