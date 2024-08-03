import React from 'react'
import searchIcon from '../../../../assets/images/searchIcon.png'
import './StoreSubHeading.css'

export default function StoreSubHeading({heading}) {
  return (
    <div className='store-element'>
      <div className="store-heading">
        <div className="store-heading-tittle">
            <div className="blob"></div>
            <h2>{heading}</h2>
        </div>
        <div className="store-heading-search">
            <div className="searchWrapper">
              <label htmlFor="search" className="visually-hidden"></label>
                <div className="searchIcon">
                  <img src={searchIcon} alt="Search Icon" />
                  {/* <p>Search</p> */}
                </div>
              <input type="text" id="search" placeholder='Search' onChange={() => {}} />
          </div>
        </div>
      </div>
    </div>
  )
}
