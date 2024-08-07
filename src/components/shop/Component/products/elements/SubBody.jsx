import React, { useState } from 'react'
import CheckIcon from '../../../../../assets/images/CheckIcon.png'
import './SubBody.css'
import { Rating } from 'react-simple-star-rating'

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

export default function SubBody({ data, rating, description }) {
  const [isDescription, setIsDescription] = useState(true)
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
        </div>}
    </div>
  )
}
