import React from 'react'
import community from '../../../assets/community.png'

function Community() {
  return (
    <div className='flex flex-row m-10 my-20 flex-wrap justify-between lg:justify-around items-center'>
      <div className="two flex flex-row items-center">
        <img src={community} className='w-[500px]' alt="" />
      </div>

      <div className="one text-left lg:ml-[-200px]">
        <h1 className='gain-header text-2xl my-7 font-bold'>Hear from our Community</h1>
        <p className='gain-text w-[480px] '>
          Rubyna speaks about her favorite StyleSeat features,
          and why StyleSeat is important to her business. Join
          today to see how StyleSeat can transform your
          business.
        </p>
        <button className='bg-[#121111] py-3 px-8 my-7 text-sm rounded-md text-white'>Get Started</button>
      </div>

    </div>
  )
}

export default Community