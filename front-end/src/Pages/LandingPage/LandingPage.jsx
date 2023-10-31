import React from 'react'
import Navbar from '../Homepage/Sections/Navbar'
import Hero from './Sections/Hero'
import Gain from './Sections/Gain'
import Calls from './Sections/calls'
import Book from './Sections/Book'
import Payment from './Sections/Payment'
import Free from './Sections/Free'
import Community from './Sections/Community'
import Invest from './Sections/Invest'
import Footer from './Sections/Footer'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Gain/>
        <Calls/>
        <Book/>
        <Payment/>
        <Free/>
        <Community/>
        <Invest/>
        <Footer/>
    </div>
  )
}

export default LandingPage
