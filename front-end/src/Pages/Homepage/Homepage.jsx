import React from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import Services from './Sections/Services'
import Videos from './Sections/Videos'
import Share from './Sections/Share'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Services/>
        <Videos/>
        <Share/>
    </div>
  )
}

export default Homepage