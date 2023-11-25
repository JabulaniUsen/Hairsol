import React from 'react'
import comp1 from '../../../assets/comp1.png'
import comp2 from '../../../assets/comp2.png'
import comp3 from '../../../assets/comp3.png'
import comp4 from '../../../assets/comp4.png'
import comp5 from '../../../assets/comp5.png'

function Hero() {
  return (
    <div className="mainbg bg-[#BB957B]">
      <div className='innerMain relative flex flex-col gap-2 py-24 px-20 text-white'>
        <h2 className='poppins text-3xl'>Pamper, Relax, Repeat! 🌿</h2>
        <h1 className='syne text-6xl font-bold'>Find a service <br /> close to you</h1>
        <p className='font-semibold'>It's time to prioritize self-care and elevate your well-being."</p>
        <div className="w-[50%] mt-10 bg-white rounded-2xl p-3">
          <input type="text" className='w-full p-3 text-black outline-none' />
        </div>
    </div>
    <div className="flex justify-center gap-4 mt-[-60px]">
      <img src={comp1} alt="" />
      <img src={comp2} alt="" />
      <img src={comp3} alt="" />
      <img src={comp4} alt="" />
      <img src={comp5} alt="" />
    </div>
    </div>
  )
}

export default Hero