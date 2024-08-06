import React, { useState } from 'react'
import deleveryTruck from '../../../../../assets/images/deleveryTruck.png'
import cartBag from '../../../../../assets/images/CartBag.png'
import Heart from '../../../../../assets/images/wishHeart-v1.png'
import HeartActive from '../../../../../assets/images/wishHeart-v1Active.png'
import shareIcon from '../../../../../assets/images/share.png'
import starIcon from '../../../../../assets/images/starIcon.png'
import messageIcon from '../../../../../assets/images/messageIcon.png'

//temp
import img from '../../../../../assets/images/Item2.png'
import { useWhishList } from '../../../../../contexts/WhishListContext'
import { useCart } from '../../../../../contexts/CartContext'


export default function MainBody() {
    const data = {
        id: 1,
        img: img,
        title: "title of prod",
        store: "name of store",
        category: "category",
        prodRating: 4.5,
        totalReview: 45,
        price: 29.99,
        prodDescription: "a small description of the product which is less than 3 line."
    }

    const description = {
        briefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor quos harum obcaecati ipsam voluptatum, laudantium ipsa enim itaque, quae, mollitia non consectetur maiores minus sapiente doloribus! Perspiciatis, voluptates dolore?",
        benefits: [
            "each benifits is exactly one line of content",
            "each benifits is exactly one line of content",
            "each benifits is exactly one line of content",
            "each benifits is exactly one line of content",
            "each benifits is exactly one line of content"
        ],
        productDetails: [
            "dimention or size of the product",
            "color of the product",
            "weight of the product"
        ]
    }

    const rating = {
        prodRating: 4.5,
        Stars: [{ fiveStars: 8 },
        { fourStar: 23 },
        { threeStar: 4 },
        { twoStar: 1 },
        { oneStar: 0 }],
        review: [{
            user: "userName",
            reviewedAt: "3 days ago",
            star: 5,
            reviewTitle: "good product",
            reviewDiscription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consequatur accusantium doloremque dignissimos non id enim? Magni aperiam dolore delectus id! Aliquam, molestiae illo libero fuga quisquam ipsum velit tempore?"
        }, {
            user: "userName",
            reviewedAt: "3 days ago",
            star: 5,
            reviewTitle: "good product",
            reviewDiscription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consequatur accusantium doloremque dignissimos non id enim? Magni aperiam dolore delectus id! Aliquam, molestiae illo libero fuga quisquam ipsum velit tempore?"
        }]
    }

    //end temp

    const { wishListId, wishHandler} = useWhishList()
    const { addItem } = useCart()

    const [count , setCount] = useState(1)
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
                        <div className="product-main-head-btn-wishlist" onClick={() => wishHandler(isWished , data)}>
                            <img src={isWished ? HeartActive : Heart} alt="" />
                        </div>
                        <div className="product-main-head-btn-share">
                            <img src={shareIcon} alt="" />
                        </div>
                    </div>

                </div>
                <div className="product-main-body">
                    <div className="product-main-body-priceandrating">
                        <div className="product-main-body-price">
                            <h2>${data.price}</h2>
                        </div>
                        <div className="product-main-body-rating">
                            <div className="rating-and-review">
                                <div className="rating">
                                    <img src={starIcon} alt="" />
                                    <p>{data.prodRating}</p>
                                </div>
                                <div className="reviewCount">
                                    <img src={messageIcon} alt="" />
                                    <p>{data.totalReview} Review</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-main-body-description">
                        <p>{data.prodDescription}</p>
                    </div>
                </div>
                <div className="count-and-addto-cart">
                    <div className="adder-remover-container">
                        <button onClick={() => setCount(count - 1  === 0 ? 1 : count - 1)}> - </button>
                        <p>{count}</p>
                        <button onClick={() => setCount(count + 1)}> + </button>
                    </div>
                    <button onClick={() => addItem(data , count)}>Add to Cart</button>
                </div>
                <div className="product-main-feature-card">
                    <div className="product-main-feature-card-element">
                        <img src={deleveryTruck} alt="" />
                        <h3>Free Delivery</h3>
                    </div>
                    <div className="product-main-feature-card-element">
                        <img src={cartBag} alt="" />
                        <h3>Return Delivery</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
