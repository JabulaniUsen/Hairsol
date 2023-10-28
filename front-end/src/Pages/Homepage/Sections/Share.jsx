import React from 'react'
import steptodown from '../../../assets/steptodown.png'
import asSeenIn from '../../../assets/as-seen-in.png'

const Share = () => {
  return (
    <div className='flex flex-col items-center justify-center my-10'>
        <div className="share relative w-[60%] bg-[#fcf2f2] rounded-xl">
            <div className="share-col content-start m-8">
                <h1 className='share-btn font-black text-xl'>Better with friends!</h1>
                <p className=' my-5 w-[50%] '>
                    Refer a friend and you'll both get 15% (up to $50)
                    off when you book with a new pro.
                </p>
                <button className='text-white py-2 px-6 text-sm bg-black rounded'>Share Now</button>
            </div>
            <img className='absolute right-0 bottom-0' src={steptodown} alt="" />
        </div>

        <div className="partners">
            <img src={asSeenIn} alt="" />
        </div>
    </div>
  )
}

export default Share