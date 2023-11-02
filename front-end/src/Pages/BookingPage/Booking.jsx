import React from 'react'
import Nav from '../../Components/Nav'
import './Book.css'
import Socials from '../../Components/Socials'
import Footer from '../Homepage/Sections/Footer'

function Booking() {
  return (
    <div>
      <Nav/>
      <div>
        <div className="bg-black w-[100%] py-1 pl-10 h-[100px] relative">
          <h1 className='grotesk text-white text-2xl font-semibold lg:text-7xl absolute bottom-[-14px] left-32'>BOOKING PAGE</h1>
        </div>
      </div>
      <div className="body flex justify-center mt-28">
          <div className=" booking-body w-[90%] lg:w-[1100px] p-8 lg:p-20 my-10">
            <div className="bg-[#1e1e1e] p-5 lg:p-10">            
              <div className="form-header text-center">
                <h1 className='syne font-bold text-4xl text-white'>Makeup Appointment Form</h1>
                <p className='montserrat text-white text-sm my-10 font-light'>Please fill the form below, it will only take 3 minutes</p>
              </div>


              <form action="" className='flex justify-center flex-col gap-8 flex-wrap '>
                <div className="flex justify-center gap-8 flex-col lg:flex-row">
                  <div className="flex flex-col w-[300px] gap-5 flex-wrap">
                    <input className='bg-transparent border-[1px] p-3 rounded-sm text-white  placeholder:text-[#c4c4c4]' type="text" placeholder='Name' />
                    <input className='bg-transparent border-[1px] p-3 rounded-sm text-white placeholder:text-[#c4c4c4]' type="number" name="" id="" placeholder='Number' />
                    <input className='date-input bg-transparent border-[1px] p-3 rounded-sm placeholder:text-[#c4c4c4]' type="date" name="" id="" style={{ placeholder: 'Choose Your Date' }} />
                    
                  </div>
                  <div className="flex flex-col w-[300px] gap-5 flex-wrap">
                    <input className='bg-transparent border-[1px] p-3 rounded-sm text-white placeholder:text-[#c4c4c4]' type="email" name="" id="" placeholder='Email' />
                    <select className='bg-transparent border-[1px] p-3 rounded-sm text-white placeholder:text-[#c4c4c4]' id="color" name="color">
                      <option value="red">Select Your Makeup Style</option>
                      <option value="green">Green</option>
                      <option value="blue">Blue</option>
                      <option value="yellow">Yellow</option>
                    </select>
                    <input className='bg-transparent border-[1px] p-3 rounded-sm placeholder:text-[#c4c4c4]' type="time" name="" id="" style={{ placeholder: 'Choose Your Date' }}/>
                  </div>
                </div>
                <textarea name="" id="" cols="5" rows="10" className='w-[640px] m-auto bg-transparent border-[1px] p-3 rounded-sm text-white placeholder:text-[#c4c4c4]' placeholder='Any Notes For Us'></textarea>
                <button className='py-3 px-7 text-sm bg-slate-100 rounded-sm w-[150px] lg:ml-28 font-bold'>Book Now</button>
              </form>
            </div>

            
          </div>
        </div>
        <Socials/>
        <Footer/>
    </div>
  )
}

export default Booking