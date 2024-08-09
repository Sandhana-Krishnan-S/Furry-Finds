import React from 'react'
import NavBar from '../../../global/NavBar'
import Footer from '../../../global/Footer'
import PetStoreBanner from './Component/PetStoreBanner'
import StoreSubHeading from '../global/StoreSubHeading'
import Listing from '../global/StoreListing/Listing'

export default function Pets() {
  return (
    <>
    <NavBar />
    <div className="pet-shop">
      <PetStoreBanner />
      <StoreSubHeading heading = 'Pets' />
      <Listing category= 'PET' />
    </div>
    <Footer />
    </>
  )
}
