import React from 'react'
import screenOne from '../../../assets/screen1.png'
import screenTwo from '../../../assets/screen2.png'
import screenThree from '../../../assets/screen3.png'

const Hero = () => {
  return (
    <div className='flex flex-row m-10 flex-wrap justify-between lg:justify-around items-center'>
      <div className="one font-black">
        <p className='l-hero-text text-2xl lg:text-4xl'>
          Join the largest network <br />
          of clients searching for <br />
          top beauty professionals
        </p>
        <button className='bg-[#121111] py-3 px-8 my-7 text-sm rounded-md text-white'>Get Started</button>
      </div>

      <div className="two flex flex-row items-center">
        <img src={screenOne} className='mr-[-45px]' alt="" />
        <img src={screenTwo} className='z-[20]' alt="" />
        <img src={screenThree} className='ml-[-45px]' alt="" />
      </div>
    </div>
  )
}

export default Hero
