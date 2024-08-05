import React from 'react'
import NavBar from '../../../global/NavBar'
import Footer from '../../../global/Footer'
import MainBody from './elements/MainBody'

export default function SingleProduct() {
  return (
    <div>
      <NavBar />
      <div className="single-product-main">
        <MainBody />
      </div>
      <Footer />
    </div>
  )
}
