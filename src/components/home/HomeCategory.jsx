import React from 'react'
import cat1 from '../../assets/images/cat1.png'
import cat2 from '../../assets/images/cat2.png'
import cat3 from '../../assets/images/cat3.png'
import '../../styles/Home/HomeCategory.css'

export default function HomeCategory() {
  return (
    <div className='home-category'>
      <div className="heading">
        <h4>CATEGORY</h4>
        <h2>We Offer Best Services</h2>
      </div>
      <div className="service-col">
        <div className="category-list">
            <ul>
                <li>
                    <div className="card">
                        <img src={cat1} alt="" />
                        <h3>Pet and All Pet Accessory</h3>
                    </div>
                </li>
                <li>
                    <div className="card">
                        <img src={cat2} alt="" />
                        <h3>Pet Care and Ventilation</h3>
                    </div>
                </li>
                <li>
                    <div className="card">
                        <img src={cat3} alt="" />
                        <h3>A Better Place - for Pets</h3>
                    </div>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}
