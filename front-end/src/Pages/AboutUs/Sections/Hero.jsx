import React from 'react'
import aboutHero from '../../../assets/about-hero.png'
const Hero = () => {
  return (
    <div className='relative pb-7'>
      <h1 className='font-bold text-5xl text-white absolute top-5 lg:top-24 left-32'>About Us</h1>
        <img 
            src={aboutHero} 
            className='w-full'
            alt="" />
    </div>
  )
}
 
export default Hero