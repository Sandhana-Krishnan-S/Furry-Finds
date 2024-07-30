import React, { useRef } from 'react'
import NavBar from '../global/NavBar'
import AboutView from './AboutView'
import AboutContent from './AboutContent'
import Footer from '../global/Footer'

export default function AboutUs() {
  const ViewMoreRef = useRef(null)

  const scrollToMore = () => {
    if (ViewMoreRef.current) {
      ViewMoreRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div>
      <NavBar />
      <AboutView scrollToMore={scrollToMore} />
      <AboutContent ref={ViewMoreRef} />
      <Footer />
    </div>
  )
}
