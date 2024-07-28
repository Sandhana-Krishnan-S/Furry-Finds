import React from 'react'
import service1 from '../../assets/images/Services.png'
import service2 from '../../assets/images/Services-1.png'
import service3 from '../../assets/images/Services-2.png'
import '../../styles/Shop/ShopSupportDetails.css'

export default function ShopSupportDetails() {
  return (
    <div className='ShopSupportDetails'>
      <div className="features">
        <img src={service1} alt="" />
        <h4>FREE AND FAST DELIVERY</h4>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className="features">
        <img src={service2} alt="" />
        <h4>24/7 CUSTOMER SERVICE</h4>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className="features">
        <img src={service3} alt="" />
        <h4>MONEY BACK GUARANTEE</h4>
        <p>We return money within 30 days</p>
      </div>
    </div>
  )
}
