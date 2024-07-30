import React, { useRef } from 'react'
import NavBar from '../global/NavBar'
import AboutView from './AboutView'
import AboutContent from './AboutContent'

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
    </div>
  )
}
