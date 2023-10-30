import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoginPop from './LoginPop';
library.add(fas);

function LoginModal({ closeModal, setOpenModal }) {
  
  const [login, setLogin] = useState(false)

  return (
    <div className='modal-bg fixed z-30 top-40 left-[2rem] flex justify-center items-center lg:top-32 lg:left-[28rem]'>
      <div className='modal-container w-[350px] lg:w-[400px] z-30 bg-[#fbf7f3] p-6 '>
        <button
          className='absolute right-8 top-6'
          onClick={() => closeModal(false)}
        >
            <FontAwesomeIcon icon="times" />
        </button>
        <div className="text-center text-xl py-4 font-bold flex flex-row justify-center gap-2">
            <button className='py-2 px-6 text-sm bg-transparent border-black border-2'>Sign Up</button>
            <button 
              onClick={() => {
                setLogin(true)
                setOpenModal(false)
              }}
              className='py-2 px-6 text-sm bg-[#121111] text-white'>
                Log In
                </button>
        </div>
        <div className=""> 
          <h1 className='text-lg font-bold text-center'>Sign Up for StyleSeat</h1>
        </div>
        <hr />
        <div>
            <button className='w-full py-3 my-3 bg-[#121111] text-sm text-white'>SIGN UP AS A CLIENT</button>
            <p className='font-bold text-center'>or</p>
            <button className='w-full py-3 my-3 bg-[#121111] text-sm text-white'>SET UP MY BUSINESS</button>
        </div>
      </div>

      {login && <LoginPop closeLogin={() => setLogin(false)} />}
    </div>
  )
}

export default LoginModal