import React from 'react'
import journey from '../icons/journey.png'
import tick from '../icons/tick.png'

function Journey() {
  return (
    <div className='flex justify-center items-center'>
        <div className=" mx-10 p-10 ">
          <h3 className='mb-3 text-[#FB7902]'>WHAT INCLUDES?</h3>
          <h1 className='syne font-bold text-5xl mb-5'>The start of the journey</h1>
          <p className=' text-base '>
            Hairsol was founded in 2021 by two young entrepreneurs 
            who saw a problem with the fragmented service industry 
            in Denmark. There were thousands of small businesses 
            offering services, but it was difficult for consumers 
            to find them and know which ones to choose. They developed 
            the idea of creating a platform that would bring all 
            these service providers together in one place, making 
            it easier for consumers to find what they need and get 
            their issues resolved quickly and easily. Without having 
            to go to many different websites, each with their own 
            booking system.
          </p>

          <div className="syne mt-10">
            <h2 className='font-bold text-2xl mb-8'>Our Methodology:</h2>

            <div className=" flex gap-7 w-[400px] items-start mb-5">
                <img src={tick} alt="" />
                <div className="">
                    <h2 className='text-lg font-bold mb-2'>The Assessment Stage</h2>
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal letters.</p>
                </div>
            </div>
            <div className=" flex gap-7  w-[400px] items-start mb-5">
                <img src={tick} alt="" />
                <div className="">
                    <h2 className='text-lg font-bold mb-2'>The Initialisation Stage</h2>
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal letters.</p>
                </div>
            </div>
            <div className=" flex gap-7  w-[400px] items-start mb-5">
                <img src={tick} alt="" />
                <div className="">
                    <h2 className='text-lg font-bold mb-2'>The Treatment Stage</h2>
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal letters.</p>
                </div>
            </div>
          </div>
        </div>

        <div className="img w-[2300px] pr-[150px]">
          <img 
            className='' 
            src={journey} alt=""  
          />
        </div>
    </div>
  )
}

export default Journey