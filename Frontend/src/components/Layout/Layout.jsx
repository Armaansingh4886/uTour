import React from 'react'
import Routers from '../../router/Routers'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import {useLocation} from 'react-router-dom'

const Layout = () => {
  const location = useLocation().pathname;
  console.log(location);
if(location!=="/verifyemail"){
  return (
    
    <>
    
    <Header/>
    <Routers/>
    <Footer/>
    
        </>
  )
}else{
  console.log(location);
  return (
    
    <>
    
    {/* <Header/> */}
    <Routers/>
    {/* <Footer/> */}
    
        </>
  )}
}

export default Layout 
