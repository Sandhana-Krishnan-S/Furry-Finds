import React from 'react'
import NavBar from '../../../global/NavBar'
import StoreSubHeading from '../global/StoreSubHeading'
import Listing from '../global/StoreListing/Listing'
import Footer from '../../../global/Footer'
import AquaticBanner from './component/AquaticBanner'

export default function Aquatic() {
  return (
    <>
    <NavBar />
    <div>
      <AquaticBanner />
      <StoreSubHeading heading = 'Aquatic' />
      <Listing category= 'AQUATIC' />
    </div>
    <Footer />
    </>
  )
}
