import React from 'react'
import { Link } from 'react-router-dom';
import book from '../../../assets/book.png'

function Book() {
  return (
    <div className=''>
        <div className="flex justify-center items-center flex-col gap-6 text-center">
            <small className='product-header text-sm'>
                If it makes you feel beautiful, then do it.
            </small>
            <h1 className='product-header text-3xl font-bold w-[500px]'>
                We show your <span className='text-[#fb7902]'>skin, hair,</span> and <span className='text-[#fb7902]'>body</span> the care and attention they deserve.
            </h1>
            <Link to='/booking'><button className='text-white py-2 px-7 rounded bg-black'>Book Now</button></Link>
            <img src={book} className='w-[80%] lg:w-[70%]' alt="" />
        </div>
    </div>
  )
}

export default Book