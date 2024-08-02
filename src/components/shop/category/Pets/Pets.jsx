import React from 'react'
import NavBar from '../../../global/NavBar'
import Footer from '../../../global/Footer'
import PetStoreBanner from './Component/PetStoreBanner'

export default function Pets() {
  return (
    <>
    <NavBar />
    <div className="pet-shop">
      <PetStoreBanner />
    </div>
    <Footer />
    </>
  )
}
