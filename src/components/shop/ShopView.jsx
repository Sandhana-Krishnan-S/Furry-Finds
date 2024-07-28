import React from 'react'
import ShopCover from '../../assets/images/shop-cover.png'
import '../../styles/Shop/ShopView.css'

export default function ShopView({ onScrollToSpecialList }) {
  return (
    <div className='shop-view'>
      <div className="shop-left">
        <h2>Get Your Organic Pet Food</h2>
        <p>Your Pet deserves a best quality food and healthy  snacks. So, we have the best pet food to offer with affordable price.</p>
        <button onClick={onScrollToSpecialList}>Shop now!</button>
      </div>
      <div className="shop-right">
        <img src={ShopCover} alt="" />
      </div>
    </div>
  )
}
