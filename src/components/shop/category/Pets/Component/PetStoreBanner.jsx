import React from 'react'
import PetStoreBannerImg from '../../../../../assets/images/PetShopCover.png'
import '../../../../../styles/Shop/category/petsBanner.css'

export default function PetStoreBanner() {
  return (
    <div className='petstore-banner'>
      <div className="petstore-banner-backgroung">
        <div className="petstore-banner-content">
            <h2>Preparing Pets for a Lifetime of Happiness</h2>
            <button>Buy Now</button>
        </div>
        <div className="petstore-banner-img">
            <img src={PetStoreBannerImg} alt="" />
        </div>
      </div>
    </div>
  )
}
