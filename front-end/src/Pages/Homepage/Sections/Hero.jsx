import React, { useState } from 'react'
import heroImg from '../../../assets/hero.png'
import circleArrow from '../../../assets/circle-left.png'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);


const Hero = () => {
  

  return (
    <div className='relative'>
      <img className='w-[85%] bg-[#E6CCBD] mx-auto my-6' src={heroImg} alt="" />
      
      <div className="search lg:absolute top-20 left-28 sm:relative mb-20 ml-10">
        <h2 className="hero-text font-black text-xl">
          Discover & book local beauty <br />professionals
        </h2>
        <div className="search flex row items-center gap-1 flex-wrap">
          <div className="flex row items-center relative">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='absolute left-2' />
            <input type="text" className='py-1 px-2 pl-7 lg:border-0 border-2 rounded' placeholder='Service, Stylist or Salon' />
          </div>
          <div className="flex row items-center relative">
            <FontAwesomeIcon icon="fa-solid fa-location-dot" className='absolute left-2' /> 
            <input type="text" className='py-1 px-3 pl-7 lg:border-0 border-2 rounded' value='Mountain View, CA' />
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={{color: "#ffffff",}} className='p-2 bg-black rounded mx-[6px]'/>
          </div>
        </div>
      <div className="flex row items-center gap-2 mt-20">
        <img src={circleArrow} alt="" />
        <p className='text-[#737056] text-sm'>Are you a barber or beauty professional?</p>
      </div>
      </div>

    </div>
  )
}

export default Hero