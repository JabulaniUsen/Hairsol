import React from 'react'
import Navbar from '../Homepage/Sections/Navbar'
import Streamline from './Sections/Streamline'
import Unlock from './Sections/Unlock'
import Convenience from './Sections/Convenience'
import Seamless from './Sections/Seamless'
import Footer from '../LandingPage/Sections/Footer'

function Payment() {
  return (
    <div>
        <Navbar/>
        <Streamline/>
        <Unlock/>
        <Convenience/>
        <Seamless/>
        <Footer/>
    </div>
  )
}

export default Payment