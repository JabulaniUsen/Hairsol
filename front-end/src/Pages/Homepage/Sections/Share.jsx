import { useState } from 'react'
import steptodown from '../../../assets/steptodown.png'
import asSeenIn from '../../../assets/as-seen-in.png'
import Modal from '../../../Components/Modal';

const Share = () => {

    const [openModal, setOpenModal] = useState(false);

  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <div className="share relative lg:w-[60%] bg-[#fcf2f2] rounded-xl sm:w-[90%]">
            <div className="share-col content-start m-8">
                <h1 className='share-btn font-black text-xl'>Better with friends!</h1>
                <p className=' my-5 lg:w-[50%] md:w-80% '>
                    Refer a friend and you'll both get 15% (up to $50)
                    off when you book with a new pro.
                </p>
                <button 
                    className='text-white py-2 px-6 text-sm bg-black rounded sm:mt-[20px]'
                    onClick={() => {
                        setOpenModal(true)
                    }}
                    >
                        Share Now
                    </button>
            </div>
            <img className='lg:absolute right-0 bottom-0 md:float-right' src={steptodown} alt="" />
        </div>

        <div className="partners w-[200%] m-auto">
            <img src={asSeenIn} alt="" />
        </div>
        {openModal && <Modal closeModal={setOpenModal} />}
        
    </div>
  )
}

export default Share