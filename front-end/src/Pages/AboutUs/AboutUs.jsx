import React from 'react'
import Navbar from '../Homepage/Sections/Navbar'
import Hero from './Sections/Hero'
import Vision from './Sections/Vision'
import Mision from './Sections/Mision'
import Team from './Sections/Team'
import Footer from '../Homepage/Sections/Footer'

const AboutUs = () => {
  return (
    <div>
        <Navbar/>
        <Hero />
        <Vision/>
        <Mision/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default AboutUs