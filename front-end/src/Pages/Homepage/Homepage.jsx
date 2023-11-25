import React from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import Service from './Sections/Service'
import Videos from './Sections/Videos'
import Share from './Sections/Share'
import Footer from './Sections/Footer'
import Browse from './Sections/Browse'



const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Service/>
        <Videos/>
        <Share/>
        <Browse/>
        <Footer/>
    </div>
  )
}

export default Homepage