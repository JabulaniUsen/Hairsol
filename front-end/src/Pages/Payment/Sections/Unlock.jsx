import React from 'react'
import unlock from '../../../assets/unlock.png'

function Unlock() {
  return (
    <div>
        <div className='unlock'>
            <div className="text-center flex flex-col justify-center my-24">
                <h1 className='unlock-header text-3xl font-bold'>Unlock the power of StyleSeat Payments</h1>
                <p className="unlock-text w-[400px] lg:w-[600px] m-auto my-5">
                    No extra add-on fees, no long-term commitments – just integrated payment
                    processing designed for your convenience.
                </p>
            </div>

            <div className='flex flex-row m-10 my-20 flex-wrap justify-between lg:justify-around items-center'>
                <div className="two flex flex-row items-center lg:mr-[-100px]">
                <img src={unlock} className='w-[400px]' alt="" />
                </div>

                <div className="one text-left">
                    <h1 className='gain-header text-2xl my-7 font-bold text-[#667D45]'>Transparency & Protection</h1>
                    <h2 className='font-bold mb-[25px] mt-1'>No Hidden Fees</h2>
                    <p className='gain-text w-[480px] ml-[10px]'>
                        Experience the advantage of a lower fee of 2.75% per card
                        transaction – without any hidden or add-on charges. <br />
                        Unlike other platforms, we provide a singular, affordable rate
                        covering all transaction types, from swipes to card-on-file and key-
                        ins.
                    </p>
                    <h2 className='font-bold mb-[25px] mt-1'>No-Show & Late Cancellation Protection</h2>
                    <p className='gain-text w-[480px] ml-[10px]'>
                        Say goodbye to revenue loss due to no-shows and late
                        cancellations. We've got you covered.
                    </p>
                    <button className='bg-[#121111] py-3 px-8 my-7 text-sm rounded-md text-white'>Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Unlock