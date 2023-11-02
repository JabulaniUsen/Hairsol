import React from 'react'
import seamless from '../../../assets/seamless.png'

function Seamless() {
  return (
    <div>
        <div className='unlock'>

            <div className='flex flex-row m-10 my-20 flex-wrap justify-between lg:justify-around items-center'>
                <div className="two flex flex-row items-center lg:mr-[-100px]">
                <img src={seamless} className='w-[400px]' alt="" />
                </div>

                <div className="one text-left">
                    <h1 className='gain-header text-2xl my-7 font-bold text-[#667D45]'>Seamless & Secure</h1>
                    <h2 className='font-bold mb-[25px] mt-1'>Flexible Payment Installments for Clients</h2>
                    <p className='gain-text w-[480px] ml-[10px]'>
                        Deliver the ease of interest-free payment installments to your
                        clients, while you enjoy the security of receiving the full payment
                        upfront.
                    </p>
                    <h2 className='font-bold mb-[25px] mt-1'>Instant Payout</h2>
                    <p className='gain-text w-[480px] ml-[10px]'>
                        Whether it's a weekend, a holiday, or any day of the week, count on
                        us to put your hard-earned money within reach exactly when you
                        need it, especially in time-sensitive situations for a small fee.
                    </p>
                    <button className='bg-[#121111] py-3 px-8 my-7 text-sm rounded-md text-white'>Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Seamless