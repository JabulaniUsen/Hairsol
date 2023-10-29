import React from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import Services from './Sections/Services'
import Videos from './Sections/Videos'
import Share from './Sections/Share'
import Footer from './Sections/Footer'
import Browse from './Sections/Browse'



const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Services/>
        <Videos/>
        <Share/>
        <Browse/>
        <Footer/>
    </div>
  )
}

export default Homepage