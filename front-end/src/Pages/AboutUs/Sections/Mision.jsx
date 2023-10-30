import React from 'react'
import misionImg from '../../../assets/mision.png'

const Mission = () => {
  return (
    <div>
      <div className="vision-body flex flex-row-reverse items-center justify-center m-auto gap-20 lg:gap-0 flex-wrap my-10">
        
        <div className="img flex-none">
          <img 
            className='w-[500px] lg:mr-20' 
            src={misionImg} alt="" 
          />
        </div>
 
        <div className="vision-text flex-1 mx-10 lg:ml-40">
          <h1 className='font-bold text-2xl mb-12'>Our Vision</h1>
          <p className=' text-base lg:text-xl lg:w-[90%]'>
          Lorem ipsum dolor sit amet consectetur. Pellentesque 
          cursus sit convallis etiam vestibulum magna. Viverra 
          mi porta aliquam lorem accumsan amet maecenas neque. 
          Risus nibh nunc integer gravida. Dictum enim magnis 
          vulputate ornare. Dui morbi feugiat commodo aliquet 
          diam ultrices in malesuada. Quis imperdiet sagittis 
          dolor ut gravida tortor in viverra. Eget eu amet 
          viverra tempus porttitor vitae vitae semper. Molestie 
          velit at sapien etiam. Ut sit facilisis risus penatibus 
          egestas tortor vulputate.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Mission