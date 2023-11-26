import React from 'react'
import beauty from '../icons/beauty.png'
import great from '../icons/great.png'
import gen from '../icons/gen.png'

const Vision = () => {
  return (
    <div className='my-5'>
      <div className="head text-center ">
        <h4 className='poppins text-[#FB7902] my-2'>OUR VALUES</h4>
        <h1 className='syne text-4xl font-bold'>The work values we thrive for</h1>
      </div>

      <div className="body flex flex-col gap-8 justify-center items-center my-20">

        <div className="w-[500px] flex items-center gap-5 border-b-[1px] border-[#D3D3D3] pb-8">
          <img src={beauty} alt="" />
          <div className="poppins">
            <h2 className='font-bold text-xl mb-2'>Beauty Experts</h2>
            <p className='font-light'>The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.</p>
          </div>
        </div>

        <div className="w-[500px] flex items-center gap-5 border-b-[1px] border-[#D3D3D3] pb-8">
          <img src={great} alt="" />
          <div className="poppins">
            <h2 className='font-bold text-xl mb-2'>Great Services</h2>
            <p className='font-light'>The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.</p>
          </div>
        </div>

        <div className="w-[500px] flex items-center gap-5 pb-8">
          <img src={gen} alt="" />
          <div className="poppins">
            <h2 className='font-bold text-xl mb-2'>100% Genuine</h2>
            <p className='font-light'>The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vision