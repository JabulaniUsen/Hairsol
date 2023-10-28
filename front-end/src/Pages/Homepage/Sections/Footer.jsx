import React from 'react'
import appStore from '../../../assets/app-store.png'
import googlePlay from '../../../assets/google-play.png'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

const Footer = () => {
  return (
    <div>
        <div className="footer bg-[#121111] mt-20 flex justify-center flex-wrap flex-row ">

            <div className="col-1 basis-1/2 p-10 flex flex-col gap-7">
                <div className="texts text-white">
                    <h1 className='font-bold text-lg'>ABOUT HAIRSOL</h1>
                    <p className='mt-5 font-light'>
                        Hairsol is the online destination for beauty & wellness professionals and clients. Professionals can 
                        showcase their work, connect with new and existing clients, and build their business. Clients can discover new 
                        services and providers, book appointments online, and get inspired.
                    </p>
                </div>

                <div className="app-download flex flex-row gap-5">
                    <img src={appStore} alt="" />
                    <img src={googlePlay} alt="" />
                </div>

                <small className='text-white'>© 2023 StyleSeat, Inc. All rights reserved.</small>
            </div>

            <div className="col-2 basis-1/4 text-white p-10">
                <div className="">
                    <h1 className='pb-1'>MEDIA</h1>
                    <ul className='font-light'>
                        <li>StyleSeat Blog</li>
                        <li>Press</li>
                    </ul>
                </div>
                <br />
                <div className="">
                    <h1 >TALK TO US</h1>
                    <ul className='font-light'>
                        <li>StyleSeat Help Center</li>
                    </ul>
                </div>
            </div>
            <div className="col-3 basis-1/4 text-white py-10">
                <div className="font-light">
                    <ul>
                        <li className='pb-1'>FINDING PROFESSIONALS</li>
                        <li className='pb-1'>GET LISTED</li>
                        <li className='pb-1'>TEAM</li>
                        <li className='pb-1'>CAREERS</li>
                        <li className='pb-1'>TERMS FOR PROS</li>
                        <li className='pb-1'>TERMS FOR CLIENTS</li>
                        <li className='pb-1'>PRIVACY</li>
                        <li className='pb-1'>SITEMAP</li>
                    </ul>
                </div>
                    <div className="social-icons">
                        <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                        <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer