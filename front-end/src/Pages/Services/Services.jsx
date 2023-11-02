import React from 'react'

import Navbar from '../Homepage/Sections/Navbar'
import Products from './Sections/Products'
import Hero from './Sections/Hero'
import Book from './Sections/Book'
import Collection from './Sections/collection'
import Featured from './Sections/Featured'
import Stories from './Sections/Stories'
import Footer from '../Homepage/Sections/Footer'


function Services() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Products/>
        <Book/>
        <Collection/>
        <Featured/>
        <Stories/>
        <Footer/>
    </div>
  )
}

export default Services