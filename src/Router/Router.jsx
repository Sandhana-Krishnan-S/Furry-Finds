import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import LoginMain from '../components/login/LoginMain'
import SignUpMain from '../components/register/SignUpMain'
import Shop from '../components/shop/Shop'
import AboutUs from '../components/aboutus/AboutUs'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/login' element = {<LoginMain />} />
            <Route path='/signup' element = {<SignUpMain />} />
            <Route path='/shop' element = {<Shop />} />
            <Route path='/about' element = {<AboutUs />} />
        </Routes>
    </BrowserRouter>
  )
}
