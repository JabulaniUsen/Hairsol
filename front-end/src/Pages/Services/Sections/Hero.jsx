import React from 'react'
import comp1 from '../../../assets/comp1.png'
import comp2 from '../../../assets/comp2.png'
import comp3 from '../../../assets/comp3.png'
import comp4 from '../../../assets/comp4.png'
import comp5 from '../../../assets/comp5.png'

function Hero() {
  return (
    <div className="mainbg bg-[#BB957B]">
      <div className='innerMain relative flex flex-col gap-2 py-24 lg:px-20 px-5 text-white'>
        <h2 className='poppins lg:text-3xl'>Pamper, Relax, Repeat! 🌿</h2>
        <h1 className='syne lg:text-6xl text-4xl font-bold'>Find a service <br /> close to you</h1>
        <p className='lg:font-semibold'>It's time to prioritize self-care and elevate your well-being."</p>
        <div className="lg:w-[50%] lg:mt-10 mt-2 bg-white rounded-2xl lg:p-3 p-1">
          <input type="text" className='w-full p-3 text-black outline-none' />
        </div>
    </div>
    <div className="flex justify-center lg:gap-4 gap-0 mt-[-60px]">
      <img src={comp1} alt="" className='lg:w-auto w-[70px]' />
      <img src={comp2} alt="" className='lg:w-auto w-[70px]' />
      <img src={comp3} alt="" className='lg:w-auto w-[70px]' />
      <img src={comp4} alt="" className='lg:w-auto w-[70px]' />
      <img src={comp5} alt="" className='lg:w-auto w-[70px]' />
    </div>
    </div>
  )
}

export default Hero