import React from 'react'
import PetStoreBannerImg from '../../../../../assets/images/PetShopCover.png'

export default function PetStoreBanner() {
  return (
    <div className='petstore-banner'>
      <div className="petstore-banner-backgroung">
        <div className="petstore-banner-content">
            <h2></h2>
            <button></button>
        </div>
        <div className="petstore-banner-img">
            <img src={PetStoreBannerImg} alt="" />
        </div>
      </div>
    </div>
  )
}
