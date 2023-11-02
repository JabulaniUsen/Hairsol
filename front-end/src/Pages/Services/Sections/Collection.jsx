import React from 'react'
import hair from '../../../assets/hair.png'
import wax from '../../../assets/wax.png'
import skin from '../../../assets/skin.png'
import beauty from '../../../assets/beauty.png'
import beauty2 from '../../../assets/beauty2.png'

function Collection() {
  return (
    <div>
        <div className="team-header mt-24 flex lg:justify-around items-center mx-24 lg:mx-10 flex-wrap">
            <div className="sideOne w-[550px]">
                <p className='product-header leading-10 mt-3 mb-2 text-3xl font-semibold'>
                    Enhance your inner radiance at our 
                    <span className='text-[#fb7902]'>beauty sanctuary </span>and let your true beauty shine.
                </p>
            </div>

            <div className="sideTwo">
                <button className='py-3 px-8 text-sm text-white bg-slate-900 hover:bg-slate-800 '>Explore Services</button>
            </div>
        </div>    
        <div className="product-header team-body flex justify-center flex-wrap gap-10 my-5">
            <div className=" flex flex-col w-[300px] gap-3">
                <img 
                    className='w-[300px]'
                    src={hair} 
                    alt="" />
                <h1 className='text-2xl font-bold'>Hair Salon Haven</h1>
                <small className='text-[#fb7902] font-bold'>Explore Now</small>
            </div>

            <div className=" flex flex-col w-[300px] gap-3">
                <img 
                    className='w-[300px]'
                    src={wax} 
                    alt="" />
                <h1 className='text-2xl font-bold'>Waxing Salon Haven</h1>
                <small className='text-[#fb7902] font-bold'>Explore Now</small>
            </div>

            <div className=" flex flex-col w-[300px] gap-3">
                <img 
                    className='w-[300px]'
                    src={skin} 
                    alt="" />
                <h1 className='text-2xl font-bold'>Skincare Salon Haven</h1>
                <small className='text-[#fb7902] font-bold'>Explore Now</small>
            </div>
        </div>

        <div className="beauty ">
            <div className="img flex flex-wrap justify-around mx-32 item-center">
                <div className="">
                    <img src={beauty} className='w-[450px]' alt="" />
                    <h1 className='product-header text-4xl font-semibold m-2'>The Place Of <span className='text-[#fb7902]'>Beauty</span></h1>
                </div>
                <div className="">
                    <img src={beauty2} className='w-[450px]' alt="" />
                    <p className='montserrat text-lg w-[380px] m-1'>Our heart goes out at what we do and our slogan is making our customers  feel beautiful and fabulous. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collection