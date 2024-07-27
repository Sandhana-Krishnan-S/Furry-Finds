import React from 'react'
import About1 from '../../assets/images/about1.png'
import About2 from '../../assets/images/about2.png'
import About3 from '../../assets/images/about3.png'
import '../../styles/AboutUs/AboutContent.css'

export default function AboutContent() {
  return (
    <div className='About-content'>
      <h2>Preparing Pets for a Lifetime of Happiness</h2>
      <div className="AboutList">
      <ul>
        <li>
            <div className="about-section">
                <div className="text">
                    <h2>Helping Pets Thrive with Confidence and Care</h2>
                    <p>At Furry Finds, we are dedicated to ensuring every pet thrives with confidence and care. From adoption to expert veterinary services, we provide a nurturing environment where pets can grow and flourish. Join us in creating a loving community for pets and their owners.</p>
                </div>
                <div className="img">
                    <img src={About1} alt="" />
                </div>
            </div>
        </li>
        <li>
        <div className="about-section">
                <div className="img">
                    <img src={About2} alt="" />
                </div>
                <div className="text">
                    <h2>Experience the Joy of Pet Ownership with Furry Finds</h2>
                    <p>Discover the joy of pet ownership with Furry Finds. We offer a unique and seamless experience for pet adoption, care, and accessories, ensuring every pet finds a loving home and receives the best care possible. Join us in making every moment with your pet truly special.</p>
                </div>
            </div>
        </li>
        <li>
        <div className="about-section">
                <div className="text">
                    <h2>Compassionate Care That Makes a Difference</h2>
                    <p>At Furry Finds, our dedicated team is committed to making a meaningful impact in the lives of pets. We provide a safe and loving shelter for animals in need and warmly welcome donations to support their care. Join us in our mission to offer compassionate care and create brighter futures for pets everywhere.</p>
                </div>
                <div className="img">
                    <img src={About3} alt="" />
                </div>
            </div>
        </li>
      </ul>
      </div>
    </div>
  )
}
