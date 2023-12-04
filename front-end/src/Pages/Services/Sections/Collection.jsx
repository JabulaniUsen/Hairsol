import React from 'react'
import hair from '../../../assets/hair.png'
import wax from '../../../assets/wax.png'
import skin from '../../../assets/skin.png'
import beauty from '../../../assets/beauty.png'
import beauty2 from '../../../assets/beauty2.png'

function Collection() {
  return (
    <div>
        <div className="team-header lg:mt-24 mt-10 flex lg:justify-around justify-start items-center mx-5 lg:mx-10 flex-wrap">
            <div className="sideOne w-[550px]">
                <p className='product-header leading-10 mt-3 mb-2 text-2xl lg:text-3xl font-semibold'>
                    Enhance your inner radiance at our  
                    <span className='text-[#737056]'> beauty sanctuary </span>and let your true beauty shine.
                </p>
            </div>

            <div className="sideTwo">
                <button className='py-3 px-8 text-sm text-white bg-slate-900 hover:bg-slate-800 '>Explore Services</button>
            </div>
        </div>    
        <div className="product-header team-body flex justify-center flex-wrap gap-10 my-5">
            <div className=" flex flex-col w-[90%] lg:w-[305px] gap-3">
                <img 
                    className=''
                    src={hair} 
                    alt="" />
                <h1 className='lg:text-2xl text-lg font-bold'>Hair Salon Haven</h1>
                <small className='text-[#737056] font-bold'>Explore Now</small>
            </div>

            <div className=" flex flex-col w-[90%] lg:w-[305px] gap-3">
                <img 
                    className=''
                    src={wax} 
                    alt="" />
                <h1 className='lg:text-2xl text-lg font-bold'>Waxing Salon Haven</h1>
                <small className='text-[#737056] font-bold'>Explore Now</small>
            </div>

            <div className=" flex flex-col w-[90%] lg:w-[305px] gap-3">
                <img 
                    className=''
                    src={skin} 
                    alt="" />
                <h1 className='lg:text-2xl text-lg font-bold'>Skincare Salon Haven</h1>
                <small className='text-[#737056] font-bold'>Explore Now</small>
            </div>
        </div>

        <div className="beauty lg:visible hidden">
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