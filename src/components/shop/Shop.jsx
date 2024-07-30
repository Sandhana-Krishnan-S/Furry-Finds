import React, { useRef } from 'react'
import NavBar from '../global/NavBar'
import ShopView from './ShopView'
import ShopCategory from './ShopCategory'
import ShopSpecialList from './ShopSpecialList'
import ShopSupportDetails from './ShopSupportDetails'
import FoodAndAccessoryRec from './FoodAndAccessoryRec'
import Footer from '../global/Footer'

export default function Shop() {
  const specialListRef = useRef(null)

  const scrollToSpecialList = () => {
    if (specialListRef.current) {
      specialListRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <>
      <NavBar />
      <div style={{ margin: '16px 64px' }}>
      <ShopView onScrollToSpecialList={scrollToSpecialList} />
      <ShopCategory />
      <ShopSpecialList ref={specialListRef} />
      <ShopSupportDetails />
      <FoodAndAccessoryRec />
    </div>
    <Footer />
    </>
  )
}
