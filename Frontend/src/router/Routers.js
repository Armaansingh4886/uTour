import React from 'react'
import {Routes,Route,Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import About from '../pages/About'
import Register from '../pages/Register'
import SearchResultList from '../pages/SearchResultList'
import ThankYou from '../pages/ThankYou'
import Tour from '../pages/Tour'
import TourDetail from '../pages/TourDetail'
import Bookings from '../pages/Bookings'

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to ='Home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/tours' element={<Tour/>}/>
        <Route path='/tours/:id' element={<TourDetail/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/bookings' element={<Bookings/>}/>
        <Route path='/thank-you' element={<ThankYou/>}/>
        <Route path='/tours/search' element={<SearchResultList/>}/>
      </Routes> 
    </div>
  )
}

export default Routers
