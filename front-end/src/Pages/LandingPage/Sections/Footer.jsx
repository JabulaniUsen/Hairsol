import React from 'react'
import footerOne from '../../../assets/footer1.png'
import footerTwo from '../../../assets/footer2.png'
import footerThree from '../../../assets/footer3.png'

function Footer() {
  return (
    <div className='flex flex-row justify-between px-5 bg-black'>
      <div className="side-one"></div>
 
      <div className="side-two flex">
        <img src={footerOne} className='w-[350px] h-[230px] mr-[-150px] z-20' alt="" />
        <img src={footerTwo} className='w-[300px] h-[230px] mr-[-210px] z-10' alt="" />
        <img src={footerThree} className='w-[300px] h-[230px]' alt="" />
      </div>
    </div>
  )
}

export default Footer