import { faFacebook, faInstagram, faPinterestP, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Socials() {
  return (
    <div className='flex flex-col justify-center text-center my-6'>
        <div className="head my-4">
            <h1 className='text-[#E10984] font-bold text-2xl my-1'>FOLLOW US</h1>
            <p className="playfair">@Hairsol</p>
        </div>

        <div className="socials">
            <FontAwesomeIcon icon={faInstagram} className='text-white p-4 bg-black text-3xl rounded-full mx-2' style={{color: "#ffffff",}} />
            <FontAwesomeIcon icon={faFacebook} className='text-white p-4 bg-black text-3xl rounded-full mx-2' style={{color: "#ffffff",}} />
            <FontAwesomeIcon icon={faPinterestP} className='text-white p-4 px-5 bg-black text-3xl rounded-full mx-2' style={{color: "#ffffff",}} />
            <FontAwesomeIcon icon={faTwitter} className='text-white p-4 bg-black text-3xl rounded-full mx-2' style={{color: "#ffffff",}} />
            <FontAwesomeIcon icon={faYoutube} className='text-white p-4 bg-black text-3xl rounded-full mx-2' style={{color: "#ffffff",}} />
        </div>
    </div>
  )
}

export default Socials