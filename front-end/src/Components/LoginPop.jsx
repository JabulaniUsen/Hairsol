import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fb from '../assets/fb.png'
import apple from '../assets/apple.png'
library.add(fas);


function LoginPop({ closeLogin }) {


  return (
    <div className='modal-bg absolute flex left-[-0.5rem] justify-center items-center w-[350px]  lg:top-[-7rem] lg:left-0'>
      <div className='modal-container shadow-2xl z-30 bg-[#fbf7f3] p-6'>
        <button
          className='absolute right-8 top-10'
          onClick={() => closeLogin(false)}
        >
          <FontAwesomeIcon icon="times" />
        </button>
            <div className="body">
                <div className="text-center text-xl py-4 font-bold flex flex-row justify-center gap-2">
                    <button className='py-1 px-9 text-sm bg-transparent border-black border-2'>Sign Up</button>
                    <button className='py-1 px-9 text-sm bg-[#121111] text-white'>Log In</button>
                </div>
                <form action="" className='flex flex-col gap-4'>
                    <input className='border-0 bg-white p-2 rounded' placeholder='Enter Email' type="email" name="" id="" />
                    <input className='border-0 bg-white p-2 rounded' placeholder='Password' type="password" name="" id="" />
                    <button className='py-2 px-6 text-sm bg-[#121111] text-white'>
                        Log In
                    </button>

                    <p className='underline underline-offset-8 text-center'>Forgot Password</p>

                    <p className='text-center'>or</p>
                
                    <div className="text-center text-xl py-4 font-bold flex flex-col justify-center gap-2">
                        <div className='h-14 px-6 text-sm font-normal flex items-center gap-3 text-white bg-[#4267B2] border-2'>
                            <img src={fb} alt="" />
                            <p>Continue with Facebook</p>
                        </div>
                        <p className='text-sm font-normal'>
                            We're experiencing problems with Facebook. Please use your 
                            email to log in. You might need to reset your password.
                        </p>
                        <div className='h-14 px-6 text-sm font-normal flex items-center gap-3 bg-[#121111] text-white'>
                            <img src={apple} alt="" />
                            <p>Continue with Apple</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPop