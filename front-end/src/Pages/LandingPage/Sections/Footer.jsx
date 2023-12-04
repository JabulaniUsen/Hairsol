import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faFacebookF, faPinterestP } from '@fortawesome/free-brands-svg-icons';

import footerOne from '../../../assets/footer.png'
import logo from '../../../assets/logo2.png'
import applePlay from '../../../assets/applestore.png'
import googlePlay from '../../../assets/googleplay.png'

function Footer() {
  return (
    <div className='flex flex-row lg:justify-between py-3 lg:px-5 gap-10 bg-black flex-wrap overflow-hidden'>
      <div className="side-one lg:py-3">
        <div className="">
          <img src={logo} alt="" />
          <div className="socials flex gap-5 items-center my-12 lg:my-0 px-5">
            <FontAwesomeIcon className='text-white text-4xl mb-[-55px]' icon={faInstagram} />
            <FontAwesomeIcon className='text-white text-4xl mb-[-55px]' icon={faTiktok} />
            <FontAwesomeIcon className='text-white text-4xl mb-[-55px]' icon={faFacebookF} />
            <FontAwesomeIcon className='text-white text-4xl mb-[-55px]' icon={faPinterestP} />
          </div>
        </div>

        <p className='p-text font-semibold text-white my-20 lg:ml-10 mx-5 lg:text-2xl text-xl'>Trusted by top Professionals, loved by Clients.</p>

        <div className="download-app lg:ml-10 ml-5 flex justify-start gap-4">
          <img src={applePlay} alt="" />
          <img src={googlePlay} alt="" />
        </div>
      </div>
 
      <div className="side-two lg:mr-[200px] m-auto">
        <img src={footerOne} className='' alt="" />
      </div>
    </div>
  )
}

export default Footer