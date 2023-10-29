import React, { useState } from 'react'
import logo from '../../../assets/logo.png'
import arrowdown from '../../../assets/arrowdown.png'
import LoginModal from '../../../Components/LoginModal'

const Navbar = () => {

    const [openModal, setOpenModal] = useState(false);
    
  return (
    <div className='nav flex justify-between items-center mx-16 '>
        <div className="logo">
            <img src={logo} alt="" />
        </div>

        <div className="unordered-list cursor-pointer flex row gap-x-12 items-center">
            <div className="list list-none flex row gap-x-10">
                <li>New Clients</li>
                <li>Payments</li>
                <li>Pricing</li>
                <li className='flex row items-center'>Resources 
                    <img src={arrowdown} alt="" />
                </li>
            </div>
            <div className="account list-none flex row gap-x-4 items-center">
                <li onClick={() => {
                    setOpenModal(true)
                }}>Log In</li>
                <li className='rounded-xl bg-black text-white py-3 px-4'>Sign Up</li>
            </div>
        </div>
        {openModal && <LoginModal closeModal={() => setOpenModal(false)} />}
    </div>
  )
}

export default Navbar