import React from 'react'
import call from '../../../assets/chat.png'

function Calls() {
  return (
    <div className='calls'>
      <div className="text-center flex flex-col justify-center my-24">
        <h1 className='call-header text-xl font-bold'>Stop the endless calls, texts and <br /> DMs</h1>
        <p className="call-text w-[400px] lg:w-[500px] m-auto my-5 ">
          Send appointment reminders to your clients. No limits. No extra fees (unlike
          the other guys). We’ll even notify your waitlist when you have last-minute
          openings.
        </p>
      </div>


      <div className='flex flex-row m-10 my-20 flex-wrap justify-between lg:justify-around items-center'>
        <div className="two flex flex-row items-center">
          <img src={call} className='w-[400px]' alt="" />
        </div>

        <div className="one text-left">
          <h1 className='gain-header text-2xl lg:mt-0 mt-5'>
            Keep your cell number private <br />
            with in-app client messaging
          </h1>
        </div>

      </div>
      <div className="circles flex flex-row gap-1 justify-center items-center">
        <p className='bg-[#222222] px-2 text-white rounded-full'>1</p>
        <p className='bg-[#a7a7a7] px-2 text-white rounded-full'>2</p>
        <p className='bg-[#a7a7a7] px-2 text-white rounded-full'>3</p>
      </div>
    </div>
  )
}

export default Calls