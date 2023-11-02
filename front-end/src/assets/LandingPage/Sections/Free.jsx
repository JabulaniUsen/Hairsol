import React from 'react'
import free from '../../../assets/free.png'

function Free() {
  return (
    <div className='flex flex-row my-10 p-10 flex-wrap justify-between lg:justify-around items-center bg-[#f2f1f0]'>
      <div className="one ">
        <h1 className='l-hero-text text-2xl lg:text-4xl font-black'>
          At StyleSeat running your business is free
        </h1>
        <p className='w-[400px] mt-3'>
          You only pay to process payments and when we send you new clients.
        </p>
        <button className='bg-[#121111] py-3 px-8 my-7 text-sm rounded-md text-white'>Learn About Pricing</button>
      </div>

      <div className="two flex flex-row items-center">
        <img src={free} className='mr-[-45px] w-[450px]' alt="" />
      </div>
    </div>
  )
}


export default Free