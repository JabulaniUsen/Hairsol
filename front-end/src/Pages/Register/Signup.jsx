import React, { useState, useEffect } from 'react';
import ads from './images/ads2.png'
import Navbar from '../Homepage/Sections/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCoffee, faEnvelope, faLock, faPhone, faTruck, faUser } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('')
    const [firstname, setFirstname] = useState('')
    const [surname, setSurname] = useState('')
    const [number, setNumber] = useState()
    const [postalcode, setPostalcode] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    
   
    const togglePasswordVisibility = () => {
       setShowPassword(!showPassword);
    };

  return (
    <div>
        <Navbar/>

        <div className="flex items-center flex-col lg:flex-row gap-24 my-10">
            <div className="img">
                <img src={ads} alt="" className='cursor-pointer' />
            </div>
            <div className="form lg:w-[700px] m-auto mx-5">
                <h1 className='text-2xl font-bold text-center border-b-[1px] mb-2 p-4'>I'M A CUSTOMER ALREADY!</h1>
                <form  className='flex flex-col gap-6'>
                <div className="">
                <p className='my-1 poppins font-semibold text-xl py-3 border-b-[1px] border-[#c2c2c2]'>Required Field</p>
                    <div className="flex items-end gap-3 my-4">
                        <div className="form-group w-[100%]">
                            <select className='input-group border-[1px] border-[#c2c2c2] w-[180px] text-[#c2c2c2] mb-4' name="" id="">
                                <option value="Solution">Solution</option>
                            </select>
                            <div className="input-group border-[1px] border-[#c2c2c2]">
                                <FontAwesomeIcon icon={faUser} className='bg-[#e6e6fa] p-2'/>
                                <input
                                type="text"
                                id="text"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                className="form-control w-full outline-none mx-2"
                                placeholder='Firstname'
                                required
                                />
                            </div>
                        </div>
                        <div className="form-group w-[100%]">
                            <div className="input-group border-[1px] border-[#c2c2c2]">
                                <FontAwesomeIcon icon={faUser} className='bg-[#e6e6fa] p-2'/>
                                <input
                                type={'text'}
                                id="surname"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                                className="form-control w-full outline-none mx-2"
                                placeholder='Surname'
                                required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-end gap-3">
                        <div className="form-group w-[100%]">
                            <div className="input-group border-[1px] border-[#c2c2c2]">
                                <FontAwesomeIcon icon={faEnvelope} className='bg-[#e6e6fa] p-2'/>
                                <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control w-full outline-none mx-2"
                                placeholder='Email Address'
                                required
                                />
                            </div>
                        </div>
                        <div className="form-group w-[100%]">
                            <div className="input-group border-[1px] border-[#c2c2c2]">
                                <FontAwesomeIcon icon={faLock} className='bg-[#e6e6fa] p-2'/>
                                <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control w-full outline-none mx-2"
                                placeholder='Password'
                                required
                                />
                                <FontAwesomeIcon icon={faEye} className={` ${ showPassword ? 'password-visible' : 'password-hidden' } input-icon cursor-pointer`}
                                onClick={togglePasswordVisibility} />
                            </div>
                        </div>
                    </div>
                </div>
                
                   
                {/* second inputs  */}
                <div className="">
                <p className='my-1 poppins font-semibold text-xl py-3 border-b-[1px] border-[#c2c2c2]'>Your Address</p>
                    <div className="flex items-end gap-3 my-4">
                        <div className="form-group w-[100%]">
                            
                            <div className="input-group border-[1px] border-[#c2c2c2]">
                                <input
                                type="text"
                                id="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                placeholder='Country'
                                className="form-control w-full outline-none mx-2"
                                required
                                />
                            </div>
                        </div>
                        <div className="form-group w-[100%]">
                            <div className="input-group border-[1px] border-[#c2c2c2]">
                                <input
                                type="text"
                                id="text" 
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder='City'
                                className="form-control w-full outline-none mx-2"
                                required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="input-group border-[1px] border-[#c2c2c2] my-4">
                        <FontAwesomeIcon icon={faBuilding} className='bg-[#e6e6fa] p-2 '/>
                            <input
                            type={'text'}
                            id="address"
                            value={address}
                            placeholder='Address'
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control w-full outline-none mx-2"
                            required
                            />
                    </div>
                    <div className="flex items-end gap-3">
                        <div className="form-group w-[100%]">
                            <div className="input-group border-[1px] border-[#c2c2c2]">
                                <FontAwesomeIcon icon={faTruck} className='bg-[#e6e6fa] p-2'/>
                                <input
                                type="number"
                                id="number"
                                value={postalcode}
                                placeholder='Postal Code'
                                onChange={(e) => setPostalcode(e.target.value)}
                                className="form-control w-full outline-none mx-2"
                                required
                                />
                            </div>
                        </div>
                        <div className="form-group w-[100%]">
                            <div className="input-group border-[1px] border-[#c2c2c2]">
                                <FontAwesomeIcon icon={faPhone} className='bg-[#e6e6fa] p-2'/>
                                <input
                                type={'number'}
                                id="number"
                                value={number}
                                placeholder='Mobile'
                                onChange={(e) => setNumber(e.target.value)}
                                className="form-control w-full outline-none mx-2"
                                required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-3">
                        <h3 className='font-bold mb-2'>Privacy</h3>
                        <p className='text-sm'>By selecting continue you confirm that you have read our data protection information and accepted our AGB general terms and conditions.</p>
                    </div>
                </div>

                <button type="submit" className="submit-btn bg-black">
                    Submit
                </button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Signup