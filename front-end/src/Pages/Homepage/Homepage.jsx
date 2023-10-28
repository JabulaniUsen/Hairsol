import React from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import Services from './Sections/Services'
import Videos from './Sections/Videos'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Services/>
        <Videos/>
    </div>
  )
}

export default Homepage