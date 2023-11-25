import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faFacebookF, faPinterestP } from '@fortawesome/free-brands-svg-icons';

import footerOne from '../../../assets/footer.png'
import logo from '../../../assets/logo2.png'
import applePlay from '../../../assets/applestore.png'
import googlePlay from '../../../assets/googleplay.png'

function Footer() {
  return (
    <div className='flex flex-row justify-between py-3 lg:px-5 gap-10 bg-black flex-wrap overflow-hidden'>
      <div className="side-one py-3">
        <div className="socials flex gap-8 items-center my-12 lg:my-0">
          <img src={logo} alt="" />
          <FontAwesomeIcon className='text-white text-4xl mb-[-55px]' icon={faInstagram} />
          <FontAwesomeIcon className='text-white text-4xl mb-[-55px]' icon={faTiktok} />
          <FontAwesomeIcon className='text-white text-4xl mb-[-55px]' icon={faFacebookF} />
          <FontAwesomeIcon className='text-white text-4xl mb-[-55px]' icon={faPinterestP} />
        </div>

        <p className='p-text font-semibold text-white ml-10 mb-6 text-2xl'>Trusted by top Professionals, loved by Clients.</p>

        <div className="download-app ml-10 flex gap-4">
          <img src={applePlay} alt="" />
          <img src={googlePlay} alt="" />
        </div>
      </div>
 
      <div className="side-two mr-[200px]">
        <img src={footerOne} className='' alt="" />
      </div>
    </div>
  )
}

export default Footer