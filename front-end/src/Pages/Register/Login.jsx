import React, {useState, useEffect} from 'react'
import ads from './images/ads.png'
import Navbar from '../Homepage/Sections/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from '../../Redux/actions/Auth'
import { toast } from "react-toastify";
import { clearLoginStatus } from '../../Redux/reducers/authReducer';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isloading, setIsloading] = useState(false)

    const dispatch = useDispatch();
    const authSelector = useSelector((state) => state.authenticationSlice);
    // console.log(authSelector);

    useEffect(() => {
        if (authSelector.signingInStatus == "loading") {
          setIsloading(true);
          return;
        }
      }, [authSelector.signingInStatus]);
    
      useEffect(() => {
        if (authSelector.signingInStatus == "completed") {
        //   setIsLoading(false);
        //   setAuthState(true);
        //   navigate("/");
          return;
        }
        // dispatch(clearLoginStatus());
      }, [authSelector.signingInStatus]);
    
      useEffect(() => {
        if (authSelector.signingInStatus == "failed") {
            toast.error(`${authSelector.signingInError}`);
          setIsloading(false);
          return;
        }
        dispatch(clearLoginStatus());
      }, [authSelector.signingInStatus]);
   
    // const handleSubmit = (e) => {
    //    e.preventDefault();
    //    console.log('Email:', email);
    //    console.log('Password:', password);
    // };
   
    const togglePasswordVisibility = () => {
       setShowPassword(!showPassword);
    };

    const handleLogin = (values) => {
        dispatch(signInAction({
            email:email,
            password:password
        }));
      };

  return (
    <div>
        <Navbar/>

        <div className="flex items-center gap-24 my-10 flex-col lg:flex-row ">
            <div className="img">
                <img src={ads} alt="" className='cursor-pointer' />
            </div>
            <div className="form lg:w-[700px]">
                <h1 className='text-2xl font-bold text-center border-b-[1px] mb-2 p-4'>I'M A CUSTOMER ALREADY!</h1>
                <div  className='flex flex-col gap-6'>
                    <div className="form-group">
                    <p className='my-1 poppins font-semibold'>Log in with email address and password</p>
                        <div className="input-group border-[1px] border-[#c2c2c2]">
                            <FontAwesomeIcon icon={faEnvelope} className='bg-[#e6e6fa] p-3'/>
                            <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control w-full outline-none mx-2"
                            required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group border-[1px] border-[#c2c2c2]">
                            <FontAwesomeIcon icon={faLock} className='bg-[#e6e6fa] p-3'/>
                            <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control w-full outline-none mx-2"
                            required
                            />
                            <FontAwesomeIcon icon={faEye} className={` ${ showPassword ? 'password-visible' : 'password-hidden' } input-icon cursor-pointer`}
                            onClick={togglePasswordVisibility} />
                        </div>
                    </div>
                   
                    <button onClick={handleLogin} className="submit-btn bg-black">
                        Login
                    </button>
                    <p className='poppins font-semibold cursor-pointer'>I have forgotten my password</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Login