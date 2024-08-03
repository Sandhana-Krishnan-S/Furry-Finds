import React from 'react'
import NavBar from '../../../global/NavBar'
import AccessoryBanner from './component/AccessoryBanner'
import StoreSubHeading from '../global/StoreSubHeading'
import Listing from '../global/StoreListing/Listing'
import Footer from '../../../global/Footer'

export default function Accessory() {
  return (
    <>
    <NavBar />
    <div className="pet-shop">
      <AccessoryBanner />
      <StoreSubHeading heading = 'Accessory' />
      <Listing category= 'Accessory' />
    </div>
    <Footer />
    </>
  )
}
