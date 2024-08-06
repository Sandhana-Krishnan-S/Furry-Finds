import React, { useState } from 'react'
import CheckIcon from '../../../../../assets/images/CheckIcon.png'
import './SubBody.css'

const DescriptionList = ({description}) => {
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
        <h4 id={isDescription ? 'active' : 'non-active'} onClick={() => setIsDescription(true)}>Description</h4>
        <h4 id={!isDescription ? 'active' : 'non-active'} onClick={() => setIsDescription(false)}>Reviews</h4>
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
              {description.benefits.map(previousItem => {return <DescriptionList description={previousItem} />} )}
            </div>
            <div className="subBody-description-heading">
              <h2>Product Details</h2>
            </div>
            <div className="SubBody-list">
              {description.productDetails.map(previousItem => {return <DescriptionList description={previousItem} />} )}
            </div>
        </div>
        : <div className='subBody-review'>
            <div className="subBody-description-heading">
              <h2>Customer Feedback</h2>
            </div>
            <div className="subBody-customer-feedback">
              <div className="overAll-feedback"></div>
              <div className="overAll-feedback-chart"></div>
            </div>
          </div>}
    </div>
  )
}
