import React from 'react'
import NavBar from '../../../global/NavBar'
import Footer from '../../../global/Footer'
import StoreSubHeading from '../global/StoreSubHeading'
import Listing from '../global/StoreListing/Listing'
import FoodStoreBanner from './component/FoodStoreBanner'

export default function FoodStore() {
  return (
    <>
    <NavBar />
    <div>
      <FoodStoreBanner />
      <StoreSubHeading heading = 'Food' />
      <Listing category= 'Food' />
    </div>
    <Footer />
    </>
  )
}
