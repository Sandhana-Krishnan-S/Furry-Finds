import React, { useState } from 'react'
import deleveryTruck from '../../../../../assets/images/deleveryTruck.png'
import cartBag from '../../../../../assets/images/CartBag.png'
import Heart from '../../../../../assets/images/wishHeart-v1.png'
import HeartActive from '../../../../../assets/images/wishHeart-v1Active.png'
import shareIcon from '../../../../../assets/images/share.png'
import starIcon from '../../../../../assets/images/starIcon.png'
import messageIcon from '../../../../../assets/images/messageIcon.png'
import { useCart } from '../../../../../contexts/CartContext'
import { useWhishList } from '../../../../../contexts/WhishListContext'
import './MainBody.css'

//temp



export default function MainBody({data}) {
    console.log(data)
    const { wishListId, wishHandler } = useWhishList()
    const { addItem } = useCart()

    const [count, setCount] = useState(1)
    const isWished = wishListId.has(data.id)
    return (
        <div className='product-main-body'>
            <div className="product-main-img">
                <img src={data.img} alt="" />
            </div>
            <div className="product-main-content">
                <div className="product-main-head-content">
                    <div className="product-main-head-texts">
                        <h3>{data.title}</h3>
                        <p>{data.store}</p>
                    </div>
                    <div className="product-main-head-btn">
                        <div className="product-main-head-btn-holder" onClick={() => {
                            console.log(data.img)
                            wishHandler(isWished, data)}}>
                            <img src={isWished ? HeartActive : Heart} alt="" />
                        </div>
                        <div className="product-main-head-btn-holder">
                            <img src={shareIcon} alt="" />
                        </div>
                    </div>

                </div>
                <div className="product-main-body-content">
                    <div className="product-main-body-priceandrating">
                        <div className="product-main-body-price">
                            <h2>${data.price}</h2>
                        </div>
                        <div className="product-main-body-rating">
                            <div className="rating-and-review">
                                <div className="product-main-body-rating">
                                    <div className="rating-card" id='star'>
                                        <img src={starIcon} alt="" />
                                        <p>{data.prodRating}</p>
                                    </div>
                                    <div className="rating-card" id='review'>
                                        <img src={messageIcon} alt="" />
                                        <p>{data.totalReview} Review</p>
                                    </div>
                                </div>
                                <p className='positive'><span className='color-green'>{(data.prodRating/5) * 100}%</span> of buyers have recommended this.</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-main-body-description">
                        <p>{data.prodDescription}</p>
                    </div>
                </div>
                <div className="count-and-addto-cart">
                    <div className="adder-remover-container">
                        <button onClick={() => setCount(count - 1 === 0 ? 1 : count - 1)}> - </button>
                        <p>{count}</p>
                        <button onClick={() => setCount(count + 1)}> + </button>
                    </div>
                    <button onClick={() => addItem(data, count)} className='product-cart-btn'>Add to Cart</button>
                </div>
                <div className="product-main-feature-card">
                    <div className="product-main-feature-card-element">
                        <img src={deleveryTruck} alt="" />
                        <h3>Free Delivery</h3>
                    </div>
                    <div className="product-main-feature-card-element" style={{borderColor : "transparent"}}>
                        <img src={cartBag} alt="" />
                        <h3>Return Delivery</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
