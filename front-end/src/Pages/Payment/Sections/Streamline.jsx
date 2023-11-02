import React from 'react'
import payment from '../../../assets/payment2.png'

function Streamline() {
  return (
    <div>
        <div className='flex flex-row m-10 my-20 flex-wrap justify-between lg:justify-around gap-10 lg:gap-0 items-center'>
            <div className="two flex flex-row items-center lg:mr-[-100px]">
                <img src={payment} className='w-[400px]' alt="" />
            </div>
            <div className="one text-left">
                <h1 className='gain-header text-4xl my-7 font-bold text-[#667D45]'>Streamline payments <br /> with StyleSeat</h1>
                <p className='gain-text w-[480px]'>
                    Fast, secure and seamless - no extra fees or contracts,
                    just integrated robust processing.
                </p>
                <button className='bg-[#121111] py-3 px-8 my-7 text-sm rounded-md text-white'>Get Started</button>
            </div>
        </div> 
    </div>
  )
}

export default Streamline