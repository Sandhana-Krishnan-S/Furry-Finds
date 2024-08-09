import React from 'react'
import NavBar from '../../../global/NavBar'
import Footer from '../../../global/Footer'
import StoreSubHeading from '../global/StoreSubHeading'
import Listing from '../global/StoreListing/Listing'
import PetStoreBanner from '../Pets/Component/PetStoreBanner'

export default function FoodStore() {
  return (
    <>
    <NavBar />
    <div>
      <PetStoreBanner />
      <StoreSubHeading heading = 'Food' />
      <Listing category= 'FOOD' />
    </div>
    <Footer />
    </>
  )
}
