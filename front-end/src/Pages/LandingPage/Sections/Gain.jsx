import React from 'react'
import gain from '../../../assets/gain.png'

function Gain() {
  return (
  <div className='flex flex-row m-10 my-20 flex-wrap justify-between lg:justify-around items-center'>
    <div className="two flex flex-row items-center">
      <img src={gain} className='' alt="" />
    </div>

    <div className="one text-left">
      <h1 className='gain-header text-2xl my-7 font-bold'>Gain New Clients, Create Lasting <br />Connections</h1>
      <p className='gain-text w-[480px]'>
        StyleSeat promotes your business by investing in TV
        ads, Google Ads, digital and social media marketing,
        and more to connect you with quality clients and keep
        your calendar consistently booked.We ensure your
        schedule stays full so you can focus on delivering
        exceptional service.
      </p>
      <button className='bg-[#121111] py-3 px-8 my-7 text-sm rounded-md text-white'>Learn More</button>
    </div>

  </div>
  )
}

export default Gain