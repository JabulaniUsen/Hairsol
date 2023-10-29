import { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

function Modal({ closeModal }) {
  return (
    <div className='absolute modal-bg flex justify-center items-center'>
      <div className='modal-container z-30 rounded bg-white p-6'>
        <button
          className='absolute right-8 top-6'
          onClick={() => closeModal(false)}
        >
          <FontAwesomeIcon icon="times" />
        </button>
        <div className="title text-center text-xl py-3 font-bold">Share</div>
        <div className="body flex flex-col gap-5">
          <div className="p-4 border-2 border-black w-[400px]">
            <h1>Facebook</h1>
          </div>
          <div className="p-4 border-2 border-black w-[400px]">
            <h1>Email</h1>
          </div>
          <div className="p-4 border-2 border-black w-[400px]">
            <h1>Twitter</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
