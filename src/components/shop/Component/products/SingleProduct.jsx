import React from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from '../../../global/NavBar'
import Footer from '../../../global/Footer'
import MainBody from './elements/MainBody'
import SubBody from './elements/SubBody'

export default function SingleProduct() {
  const location = useLocation();
  const { item } = location.state || {};

  const rating = {
    prodRating: 4.5,
    totalReview: 36,
    Stars:[
      { stars: 5, count: 8 },
      { stars: 4, count: 23 },
      { stars: 3, count: 4 },
      { stars: 2, count: 1 },
      { stars: 1, count: 0 },
    ],
    review: [{
        user: "userName",
        reviewedAt: "2024-08-05T12:00:00",
        star: 5,
        reviewTitle: "good product",
        reviewDiscription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consequatur accusantium doloremque dignissimos non id enim? Magni aperiam dolore delectus id! Aliquam, molestiae illo libero fuga quisquam ipsum velit tempore?"
    }, {
        user: "userName",
        reviewedAt: "2024-08-05T12:00:00",
        star: 5,
        reviewTitle: "good product",
        reviewDiscription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consequatur accusantium doloremque dignissimos non id enim? Magni aperiam dolore delectus id! Aliquam, molestiae illo libero fuga quisquam ipsum velit tempore?"
    }]
}
  if (!item) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <NavBar />
      <div className="single-product-main">
        <MainBody data={item} />
        <SubBody data={item} description={item.description} rating={rating} />
      </div>
      <Footer />
    </div>
  )
}
