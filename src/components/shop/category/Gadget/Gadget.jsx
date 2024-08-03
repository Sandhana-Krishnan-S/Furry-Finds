import React from 'react'
import NavBar from '../../../global/NavBar'
import GadgetBanner from './component/GadgetBanner'
import StoreSubHeading from '../global/StoreSubHeading'
import Listing from '../global/StoreListing/Listing'
import Footer from '../../../global/Footer'

export default function Gadget() {
  return (
    <>
    <NavBar />
    <div>
      <GadgetBanner />
      <StoreSubHeading heading = 'Gadget' />
      <Listing category= 'Gadget' />
    </div>
    <Footer />
    </>
  )
}
