import { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

function Sharemodal({ closeModal }) {
  return (
    <div className='modal-bg absolute flex justify-center items-center'>
      <div className='modal-container shadow-2xl z-30 rounded bg-white p-6'>
        <button
          className='absolute right-8 top-6'
          onClick={() => closeModal(false)}
        >
          <FontAwesomeIcon icon="times" />
        </button>
        <div className="title text-center text-xl py-3 font-bold">Share</div>
        <div className="body flex flex-col gap-5">
          <div className="p-4 border-2 border-black w-[300px] lg:w-[400px]">
            <FontAwesomeIcon icon="square-facebook" />
            <h1>Facebook</h1>
          </div>
          <div className="p-4 border-2 border-black w-[300px] lg:w-[400px]">
            <FontAwesomeIcon icon="envelope" />
            <h1>Email</h1>
          </div>
          <div className="p-4 border-2 border-black w-[300px] lg:w-[400px]">
            <FontAwesomeIcon icon="square-twitter" />
            <h1>Twitter</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sharemodal;
