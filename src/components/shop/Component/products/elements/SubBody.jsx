import React, { useEffect, useState } from 'react'
import CheckIcon from '../../../../../assets/images/CheckIcon.png'
import './SubBody.css'
import { Rating } from 'react-simple-star-rating'
import { formatDistanceToNow } from 'date-fns'
import axios from 'axios'
import Card from '../../Card/Card'

const DescriptionList = ({ description }) => {
  return (
    <div className='DescriptionList'>
      <div className="DescriptionList-img">
        <img src={CheckIcon} alt="" />
      </div>
      <p className='DescriptionList-text'>{description}</p>
    </div>
  )
}

// user: "userName",
// reviewedAt: "3 days ago",
// star: 5,
// reviewTitle: "good product",
// reviewDiscription: "Lorem

const ReviewList = ({ review }) => {
  return (
    <div className="ReviewList">
     <div className="reviewList-User">
     <h3>{review.user}</h3>
     <small>{formatDistanceToNow(new Date(review.reviewedAt), { addSuffix: true })}</small>
     </div>
     <Rating initialValue={review.star} size={16}  readonly/>
      <h4>{review.reviewTitle}</h4>
      <p>{review.reviewDiscription}</p>
    </div>
  )
}

export default function SubBody({ data, rating, description }) {
  const [reviews, setReviews] = useState([...rating.review])
  const [isDescription, setIsDescription] = useState(true)
  const [randomFour , setRandomFour] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const response = axios.get("")
      setRandomFour(JSON.stringify(response.list))
    }
  } , [])

  return (
    <div className='SubBody-main'>
      <div className='SubBody-switch'>
        <h4 id={isDescription ? 'active' : 'non-active'} onClick={() => setIsDescription(true)} className='toggler-product'>Description</h4>
        <h4 id={!isDescription ? 'active' : 'non-active'} onClick={() => setIsDescription(false)} className='toggler-product'>Reviews</h4>
      </div>
      {isDescription
        ? <div className='subBody-description'>
          <div className="subBody-description-heading">
            <h2>Product Description</h2>
          </div>
          <div className="SubBody-briefDescription">
            <p>{description.briefDescription}</p>
          </div>
          <div className="subBody-description-heading">
            <h2>Benifits</h2>
          </div>
          <div className="SubBody-list">
            {description.benefits.map(previousItem => { return <DescriptionList description={previousItem} /> })}
          </div>
          <div className="subBody-description-heading">
            <h2>Product Details</h2>
          </div>
          <div className="SubBody-list">
            {description.productDetails.map(previousItem => { return <DescriptionList description={previousItem} /> })}
          </div>
        </div>
        : <div className='subBody-review'>
          <div className="subBody-description-heading">
            <h2>Customer Feedback</h2>
          </div>
          <div className="subBody-customer-feedback">
            <div className="overAll-feedback">
              <h1>{rating.prodRating}</h1>
              <Rating readonly={true} initialValue={rating.prodRating || 0} allowFraction size={26} />
              <p> Product Rating</p>
            </div>
            <div className="overAll-feedback-chart">
              {rating.Stars.map(({ stars, count }) => (
                <div className="feedback-row" key={stars}>
                  <div className="feedback-bar">
                    <div
                      className="fill"
                      style={{ width: `${(count * 100) / rating.totalReview}%` }}
                    ></div>
                  </div>
                  <div className="stars">
                    <Rating initialValue={5} readonly size={16} emptyColor="transparent" />
                  </div>
                  <div className="percentage">
                    <p>{((count * 100) / rating.totalReview).toFixed(2)}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="subBody-description-heading">
            <h2>Reviews</h2>
          </div>
          <div className="reviewList">
            {reviews.map((review) => {
              return <ReviewList review={review} />
            })}
          </div>
        </div>}
        <div className="subBody-description-heading">
            <h2>Items You Might Like</h2>
          </div>
          <div className="special-listing">
            {randomFour.map((item) => {
              return <Card item={item}/>
            })}
          </div>
    </div>
  )
}
