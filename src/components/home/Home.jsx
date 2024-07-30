import React from 'react'
import NavBar from '../global/NavBar'
import HomeView from './HomeView'
import HomeCategory from './HomeCategory'
import breaker from '../../assets/images/breaker.png'
import HomeContent from './HomeContent'
import '../../styles/Home/style.css'
import Footer from '../global/Footer'

export default function Home() {
  return (
    <>
      <NavBar />
    <div className='home'>
      <HomeView />
      <HomeCategory />
      <img src={breaker} alt="" />
      <HomeContent />
    </div>
    <Footer />
    </>
  )
}
