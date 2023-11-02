import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faFacebookF, faPinterestP } from '@fortawesome/free-brands-svg-icons';

import footerOne from '../../../assets/footer1.png'
import footerTwo from '../../../assets/footer2.png'
import footerThree from '../../../assets/footer3.png'
import logo from '../../../assets/logo2.png'
import applePlay from '../../../assets/applestore.png'
import googlePlay from '../../../assets/googleplay.png'

function Footer() {
  return (
    <div className='flex flex-row justify-between lg:px-5 gap-10 bg-black flex-wrap overflow-hidden'>
      <div className="side-one py-3">
        <div className="socials flex gap-8 items-center my-12 lg:my-0">
          <img src={logo} alt="" />
          <FontAwesomeIcon className='text-white text-3xl mb-[-55px]' icon={faInstagram} />
          <FontAwesomeIcon className='text-white text-3xl mb-[-55px]' icon={faTiktok} />
          <FontAwesomeIcon className='text-white text-3xl mb-[-55px]' icon={faFacebookF} />
          <FontAwesomeIcon className='text-white text-3xl mb-[-55px]' icon={faPinterestP} />
        </div>

        <p className='font-bold text-white ml-10 mt-[-40px] mb-1'>Trusted by top Professionals, loved by Clients.</p>

        <div className="download-app ml-10 flex gap-4">
          <img src={applePlay} alt="" />
          <img src={googlePlay} alt="" />
        </div>
      </div>
 
      <div className="side-two flex">
        <img src={footerOne} className='w-[350px] h-[230px] mr-[-150px] z-20' alt="" />
        <img src={footerTwo} className='w-[300px] h-[230px] mr-[-210px] z-10' alt="" />
        <img src={footerThree} className='w-[300px] h-[230px]' alt="" />
      </div>
    </div>
  )
}

export default Footer