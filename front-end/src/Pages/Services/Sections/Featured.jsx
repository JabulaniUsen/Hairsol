import React from 'react'
import bag from '../../../assets/bag.png'
import HavenImage from "../../../assets/haven.png";
import jewelries from '../../../assets/jewelries.png'
import salonVideo from '../../../assets/Salon Video.png'

function Featured() {
  return (
    <div className='mb-20'>
        <div className="team-header mt-24 flex lg:justify-around justify-start items-center mx-5 lg:mx-10 flex-wrap">
            <div className="sideOne w-[550px]">
                <p className='product-header leading-10 mt-3 mb-2 lg:text-3xl text-2xl font-semibold'>
                    Featured
                </p>
            </div>

            <div className="sideTwo">
                <button className='py-3 px-8 text-sm text-white bg-slate-900 hover:bg-slate-800 '>Explore Collection</button>
            </div>
        </div>  
        
        <div className="products-sec flex lg:justify-center flex-wrap items-center gap-5 my-16">
            <div className="bottom-5 left-5 relative">
                <img src={bag} className=' lg:w-[330px] w-[320px]' alt="" />
                <div className="syne absolute bottom-10 left-[65px] shadow-xl bg-[#fffbf2] flex flex-col gap-10 p-10">
                    <p className='text-xl font-bold'>Phne Bags</p>
                    <p className='text-[#fb7902] font-bold text-sm'>View Collections</p>
                </div>
            </div>
            <div className="bottom-5 left-5 relative">
                <img src={HavenImage} className=' lg:w-[330px] w-[320px]' alt="" />
                <div className="syne absolute bottom-10 left-[45px] shadow-xl bg-[#fffbf2] flex flex-col gap-10 p-10">
                    <p className='text-xl font-bold'>Doris C. Haven</p>
                    <p className='text-[#fb7902] font-bold text-sm'>View Collections</p>
                </div>
            </div>
            <div className="bottom-5 left-5 relative">
                <img src={jewelries} className=' lg:w-[330px] w-[320px]' alt="" />
                <div className="syne absolute bottom-10 left-[50px] shadow-xl bg-[#fffbf2] flex flex-col gap-10 p-10">
                    <p className='text-xl font-bold'>JaB Jewelries</p>
                    <p className='text-[#fb7902] font-bold text-sm'>View Collections</p>
                </div>
            </div>
        </div>

        <div className="flex flex-col">
            <div className="img">
                <img src={salonVideo} className='w-[90%] lg:w-[70%] m-auto' alt="" />
            </div>
            <div className="team-header  flex lg:justify-around items-center mx-5 lg:mx-10 flex-wrap">
                <div className="syne sideOne w-[450px]">
                    <h1 className='syne leading-10 mt-3 lg:mb-2 lg:text-3xl text-2xl font-semibold'>
                        Our <span className='text-[#fb7902]'>Story </span>
                    </h1>
                    <p>
                        Life inside our beauty salon is never a dull moment, and the enthusiasm of wanting to satisfy our customers keeps all of us united.
                    </p>
                </div>

                <div className="sideTwo mt-3">
                    <button className='py-3 px-8 text-sm text-white bg-slate-900 hover:bg-slate-800 '>Explore Services</button>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default Featured