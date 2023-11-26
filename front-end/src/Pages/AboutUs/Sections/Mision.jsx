import React from 'react'
import aboutus from '../icons/aboutus.jpg'

const Mission = () => {
  return (
    <div>
      <div className="vision-body flex flex-row-reverse items-center justify-around m-[100px] bg-[#422a3c] h-[450px] py-10">

        <div className="vision-text flex-1 mx-10 p-10">
          <h3 className='text-white mb-3'>ABOUT US</h3>
          <h1 className='syne font-bold text-5xl mb-5 text-white'>It’s the bridge between service companies and consumers.</h1>
          <p className=' text-base text-white '>
            Hairsol is a Copenhagen-based technology company 
            known for our overview platform. Our aim is to 
            simplify and improve everyday life for citizens 
            in Denmark. One platform that brings together 
            all services in an easy and controlled environment.
          </p>
        </div>
                
        <div className="img flex-none">
          <img 
            className=' w-[400px] lg:ml-28' 
            src={aboutus} alt=""  
          />
        </div>

      </div>
    </div>
  )
}

export default Mission