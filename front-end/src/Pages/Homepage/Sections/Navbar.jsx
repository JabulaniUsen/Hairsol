import React, { useState } from 'react'
import logo from '../../../assets/logo.png'
import arrowdown from '../../../assets/arrowdown.png'
import LoginModal from '../../../Components/LoginModal'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [openModal, setOpenModal] = useState(false);
    
  return (
    <div className='nav flex justify-between items-center mx-16 '>
        <Link to='/' className="logo">
            <img src={logo} alt="" />
        </Link>

        <div className="unordered-list cursor-pointer flex row gap-x-12 items-center">
            <div className="list list-none flex row gap-x-10">
                <Link to='/payment'>How it works</Link>
                <Link to='/pricing'>Pricing</Link>
                <Link to='/about'>About us</Link>
                <Link to='/services' className='flex row items-center'>Contact us
                    {/* <img src={arrowdown} alt="" /> */}
                </Link>
                {/* <Link to='/about'>About Us</Link> */}
            </div>
            <div className="account list-none flex row gap-x-4 items-center ">
                <Link className='rounded-xl border-black border-[1px] py-3 px-4' onClick={() => {
                    setOpenModal(true)
                }}>Log In</Link>
                <Link to='/homepage' className='rounded-xl bg-black text-white py-3 px-4'>Sign Up</Link>
            </div>
        </div>
        {openModal && <LoginModal closeModal={() => setOpenModal(false)} />}
    </div>
  )
}

export default Navbar