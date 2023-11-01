import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'; // Use free-solid-svg-icons

function Price() {
  return (
    <div className='p-text flex flex-col justify-center items-center gap-5 my-11'>
        <div className="p-header flex flex-col justify-center items-center gap-5">
            <h1 className='p-text font-bold text-4xl'>Simple Pricing that Fits Your Style</h1>
            <p className=' w-[500px] text-center'>
                Our flexible pricing options are tailored to meet your needs as you grow.
                Powerful tools to match your business requirements. We believe the basic
                scheduling tools should be free. No contracts.
            </p>
        </div>

        <div className="p-body flex flex-row items-center justify-between gap-10">
            <div className="premium flex flex-col items-left justify-between p-5 border-lime-300 hover:border-2 rounded-xl shadow-2xl">
                <div className="">
                    <h3 className='bg-[#7bc711] p-1 px-3 rounded-full w-[115px] text-sm font-semibold'>Most Popular</h3>
                    <h1 className='font-bold text-3xl my-2 py-3'>Premium</h1>
                    <p>
                        Your business your way. More flexibility and lower <br /> fees.
                    </p>
                    <button className='bg-[#121111] p-2 px-4 rounded-lg text-white'>Start Free Trial</button>

                    <div className="features flex flex-col gap-5 my-8">
                        <div className="flex">
                            <FontAwesomeIcon icon={faCheck} className=' bg-lime-500 p-1 rounded mr-1 text-white shadow-inner' />
                            <p>Calender and Appointments</p>
                        </div>
                        <div className="flex">
                            <FontAwesomeIcon icon={faCheck} className=' bg-lime-500 p-1 rounded mr-1 text-white shadow-inner' />
                            <p>No Show Late Cancellation</p>
                        </div>
                        <div className="flex">
                            <FontAwesomeIcon icon={faCheck} className=' bg-lime-500 p-1 rounded mr-1 text-white shadow-inner' />
                            <p>Calender and Appointments</p>
                        </div>
                        <div className="flex">
                            <FontAwesomeIcon icon={faCheck} className=' bg-lime-500 p-1 rounded mr-1 text-white shadow-inner' />
                            <p>Calender and Appointments</p>
                        </div>
                        <div className="flex">
                            <FontAwesomeIcon icon={faCheck} className=' bg-lime-500 p-1 rounded mr-1 text-white shadow-inner' />
                            <p>Calender and Appointments</p>
                        </div>
                        <div className="flex">
                            <FontAwesomeIcon icon={faCheck} className=' bg-lime-500 p-1 rounded mr-1 text-white shadow-inner' />
                            <p>Calender and Appointments</p>
                        </div>
                        <div className="flex">
                            <FontAwesomeIcon icon={faCheck} className=' bg-lime-500 p-1 rounded mr-1 text-white shadow-inner' />
                            <p>Calender and Appointments</p>
                        </div>
                        <div className="flex">
                            <FontAwesomeIcon icon={faCheck} className=' bg-lime-500 p-1 rounded mr-1 text-white shadow-inner' />
                            <p>Calender and Appointments</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="premium flex flex-col items-left justify-between p-5 border-lime-300 hover:border-2 rounded-xl shadow-2xl">
                <div className="">
                    <h3 className='bg-[#7bc711] p-1 px-3 rounded-full w-[115px] text-sm font-semibold'>Most Popular</h3>
                    <h1 className='font-bold text-3xl my-2 py-3'>Premium</h1>
                    <p>
                        Your business your way. More flexibility and lower <br /> fees.
                    </p>
                    <button className='bg-[#121111] p-2 px-4 rounded-lg text-white'>Start Free Trial</button>

                    <div className="features flex flex-col gap-5 my-8">
                        <div className="flex">
                            <FontAwesomeIcon icon={faCheck} className=' bg-lime-500 p-1 rounded mr-1 text-white shadow-inner' />
                            <p>Calender and Appointments</p>
                        </div>
                        <div className="flex">
                            <FontAwesomeIcon icon={faCheck} className=' bg-lime-500 p-1 rounded mr-1 text-white shadow-inner' />
                            <p>No Show Late Cancellation</p>
                        </div>
                        <div className="flex">
                            <FontAwesomeIcon icon={faCheck} className=' bg-lime-500 p-1 rounded mr-1 text-white shadow-inner' />
                            <p>Calender and Appointments</p>
                        </div>
                        <div className="flex">
                            <FontAwesomeIcon icon={faCheck} className=' bg-lime-500 p-1 rounded mr-1 text-white shadow-inner' />
                            <p>Calender and Appointments</p>
                        </div>
                        <div className="flex">
                            <FontAwesomeIcon icon={faCheck} className=' bg-lime-500 p-1 rounded mr-1 text-white shadow-inner' />
                            <p>Calender and Appointments</p>
                        </div>
                        <div className="flex">
                            <FontAwesomeIcon icon={faCheck} className=' bg-lime-500 p-1 rounded mr-1 text-white shadow-inner' />
                            <p>Calender and Appointments</p>
                        </div>
                        <div className="flex">
                            <FontAwesomeIcon icon={faCheck} className=' bg-lime-500 p-1 rounded mr-1 text-white shadow-inner' />
                            <p>Calender and Appointments</p>
                        </div>
                        <div className="flex">
                            <FontAwesomeIcon icon={faCheck} className=' bg-lime-500 p-1 rounded mr-1 text-white shadow-inner' />
                            <p>Calender and Appointments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Price