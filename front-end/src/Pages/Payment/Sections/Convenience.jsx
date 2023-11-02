import React from 'react'
import conv from '../../../assets/conv.png'

function Convenience() {
  return (
    <div>
        <div className='flex flex-row m-10 my-20 flex-wrap justify-between lg:justify-around items-center'>

            <div className="one text-left">
                <h1 className='gain-header text-2xl my-7 font-bold text-[#667D45]'>Convenience & Ease</h1>
                <h2 className='font-bold mb-[25px] mt-1'>Easy Payments</h2>
                <p className='gain-text w-[480px] ml-[10px]'>
                    Offer your clients the flexibility of credit/debit payments and
                    mobile-friendly contactless options, including tap-to-pay on
                    iPhone.
                </p>
                <h2 className='font-bold mb-[25px] mt-1'>All-in-one Convenience</h2>
                <p className='gain-text w-[480px] ml-[10px]'>
                    With StyleSeat, handle payments, streamline tax reporting, and
                    access comprehensive business reporting in a single app.
                </p>
                <button className='bg-[#121111] py-3 px-8 my-7 text-sm rounded-md text-white'>Get Started</button>
            </div>

            <div className="two flex flex-row items-center ">
                <img src={conv} className='w-[400px] lg:w-[500px]' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Convenience