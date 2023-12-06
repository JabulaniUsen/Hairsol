import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../assets/logo.png';
import LoginModal from '../../../Components/LoginModal';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isResponsiveNavOpen, setResponsiveNavOpen] = useState(false);

  const handleToggleResponsiveNav = () => {
    setResponsiveNavOpen(!isResponsiveNavOpen);
  };

  const handleCloseResponsiveNav = () => {
    setResponsiveNavOpen(false);
  };

  return (
    <div className='nav flex justify-between items-center mx-16 h-[100px]'>
      <Link to='/' className="logo lg:position-initial w-20 lg:w-[initial]">
        <img src={logo} alt="" />
      </Link>

      {/* Hamburger Icon (Visible on smaller screens) */}
      <div className="hamburger-icon lg:hidden" onClick={handleToggleResponsiveNav}>
        <FontAwesomeIcon icon={isResponsiveNavOpen ? faTimes : faBars} />
      </div>

      {/* Full Navigation Menu (Visible on larger screens) */}
      <div className="hidden lg:flex justify-end items-center space-x-12">
        <Link to='/howitworks'>How it works</Link>
        <Link to='/pricing'>Pricing</Link>
        <Link to='/about'>About us</Link>
        <Link to='/services'>Contact us</Link>
        <div className="account flex gap-y-4 gap-x-5 items-center">
          <Link to='/login' className='rounded-xl border-black border-[1px] py-3 px-4'>Log In</Link>
          <Link to='/signup' className='rounded-xl bg-black text-white py-3 px-4'>Sign Up</Link>
        </div>
      </div>

      {/* Responsive Navbar */}
      {isResponsiveNavOpen && (
        <div className="responsive-nav">
          {/* Close Button */}
          <div className="close-icon absolute top-12 right-12 text-2xl" onClick={handleCloseResponsiveNav}>
            <FontAwesomeIcon icon={faTimes} className='' />
          </div>

          {/* Links */}
          <div className="unordered-list cursor-pointer flex flex-col gap-y-4 items-center">
            <Link to='/howitworks' onClick={handleCloseResponsiveNav}>How it works</Link>
            <Link to='/pricing' onClick={handleCloseResponsiveNav}>Pricing</Link>
            <Link to='/about' onClick={handleCloseResponsiveNav}>About us</Link>
            <Link to='/services' onClick={handleCloseResponsiveNav}>Contact us</Link>

            {/* Account Links */}
            <div className="account flex gap-y-4 gap-x-5 items-center">
              <Link to='/login' className='rounded-xl border-black border-[1px] py-3 px-4' onClick={handleCloseResponsiveNav}>Log In</Link>
              <Link to='/signup' className='rounded-xl bg-black text-white py-3 px-4' onClick={handleCloseResponsiveNav}>Sign Up</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
