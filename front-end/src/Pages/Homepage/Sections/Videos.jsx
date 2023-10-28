import React from 'react'
import manuel from '../../../assets/manuel.png'
import marissa from '../../../assets/marissa.png'
import karama from '../../../assets/karama.png'


const Videos = () => {
  return (
    <div className='flex flex-col items-center mx-20'>
      <div className="video-header my-5">
        <h1 className='text-xl font-semibold'>Meet Hairsol Pros</h1>
      </div>

      <div className="videos flex items-center justify-center flex-wrap">
        <div className="vid1 w-[30%] text-center flex flex-col items-center"> 
            <img src={manuel} className='w-[350px]' alt="" />
            <h1>Manuel, Makeup Artist</h1>
            <p>Between glam looks and good vibes, it’s no surprise why  
                <span className='text-[#2ba6cb]'> Manuel’s clients keep coming back.</span>
            </p>
        </div>
        <div className="vid1 w-[30%] text-center flex flex-col justify-center items-center">
            <img src={karama} className='w-[350px]'  alt="" />
            <h1>Kamara, Natural Hairstylist</h1>
            <p><span className='text-[#2ba6cb]'>Kamara has the skills</span> to make women and girls feel confident about wearing their natural hair.
                
            </p>
        </div>
        <div className="vid1 w-[30%] text-center flex flex-col justify-center items-center">
            <img src={marissa} className='w-[350px]'  alt="" />
            <h1>Manuel, Makeup Artist</h1>
            <p>Between glam looks and good vibes, it’s no surprise why  
                <span className='text-[#2ba6cb]'> Manuel’s clients keep coming back.</span>
            </p>
        </div>
      </div>
    </div>
  )
}

export default Videos