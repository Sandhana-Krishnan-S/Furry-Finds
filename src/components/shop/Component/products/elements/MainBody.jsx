import React from 'react'
import img from '../../../../../assets/images/Item2.png'


export default function MainBody() {
    const data = {
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

    return (
        <div className='product-main-body'>
            <div className="product-main-img">
                <img src={data.img} alt="" />
            </div>
            <div className="product-main-content">
                <div className="product-main-head-content">
                    <div className="product-main-head-texts">
                        <h3></h3>
                        <p></p>
                    </div>
                    <div className="product-main-head-btn">
                        <div className="product-main-head-btn-wishlist">
                            <img src="" alt="" />
                        </div>
                        <div className="product-main-head-btn-share">
                            <img src="" alt="" />
                        </div>
                    </div>

                </div>
                <div className="product-main-body">
                    <div className="product-main-body-priceandrating">
                        <div className="product-main-body-price">
                            <h2></h2>
                        </div>
                        <div className="product-main-body-rating">
                            <div className="rating-and-review"></div>
                        </div>
                    </div>
                    <div className="product-main-body-description">
                        <p></p>
                    </div>
                </div>
                <div className="count-and-addto-cart">
                    <div className="cart-item-counter"></div>
                    <button>Add to Cart</button>
                </div>
                <div className="product-main-feature-card">
                    <div className="free-delivery"></div>
                    <div className="return-policy"></div>
                </div>
            </div>
        </div>
    )
}
