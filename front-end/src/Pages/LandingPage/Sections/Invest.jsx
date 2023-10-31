import React from 'react'
import invest from '../../../assets/invest.png'

function Invest() {
  return (
    <div className='flex flex-row my-10 p-10 flex-wrap justify-between lg:justify-around items-center bg-[#f2f1f0]'>
      <div className="one ">
        <h1 className='l-hero-text text-2xl lg:text-4xl font-black'>
          Get $1K-$20K to invest in your business
        </h1>
        <p className='w-[400px] mt-3'>
          Thinking about moving to a new location, upgrading
          your branding or equipment? Apply for personalized
          loans through StyleSeat and automatically pay them
          back with a percentage of your daily earnings.
        </p>
        <button className='bg-[#121111] py-3 px-8 my-7 text-sm rounded-md text-white'>Get Started</button>
        <br />
        <small>All loans subject to credit approval.</small>
      </div>

      <div className="two flex flex-row items-center">
        <img src={invest} className='mr-[-45px] w-[450px]' alt="" />
      </div>
    </div>
  )
}

export default Invest