import React from 'react'
import aboutHero from '../../../assets/about-hero.png'
const Hero = () => {
  return (
    <div className='relative pb-7'>
      <h1 className='font-black text-4xl text-white absolute top-5 lg:top-24 left-32'>About Us</h1>
        <img 
            src={aboutHero} 
            className='w-full'
            alt="" />
    </div>
  )
}
 
export default Hero