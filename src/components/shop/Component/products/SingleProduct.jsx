import React from 'react'
import NavBar from '../../../global/NavBar'
import Footer from '../../../global/Footer'
import MainBody from './elements/MainBody'
import SubBody from './elements/SubBody'
import img from '../../../../assets/images/Item4.png'

export default function SingleProduct() {
  const data = {
    id: 1,
    img: img,
    title: "title of prod",
    store: "name of store",
    category: "category",
    prodRating: 4.5,
    totalReview: 45,
    price: 29.99,
    prodDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor quos harum obcaecati ipsam voluptatum, laudantium ipsa enim itaque, quae, mollitia non consectetur maiores minus sapiente doloribus! Perspiciatis, voluptates dolore?"
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
  return (
    <div>
      <NavBar />
      <div className="single-product-main">
        <MainBody data = {data} />
        <SubBody data={data} description={description} rating={rating} />
      </div>
      <Footer />
    </div>
  )
}
