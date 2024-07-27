import React from 'react'
import AboutCover from '../../assets/images/About-cover.png'
import '../../styles/AboutUs/AboutView.css'

export default function AboutView() {
  return (
    <div className='about-main'>
        <div className="content">
            <h1>About Us</h1>
            <p>From finding a forever friend to receiving expert care, Furry Finds offers a seamless and enriching experience for pet adoption, sheltering, and accessories. Our mission is to empower every pet lover to connect, care, and cherish their furry companions beyond boundaries. We provide a safe haven for pets in need, support with comprehensive veterinary services, and offer a wide range of high-quality pet accessories. Join us in creating a community where love, care, and happiness for pets thrive.</p>
            <button>See More</button>
        </div>
      <div className="cover">
        <img src={AboutCover} alt="" />
      </div>
    </div>
  )
}
