import React, { useState, useEffect } from 'react';
import screenOne from '../../../assets/screen1.png';
import screenTwo from '../../../assets/screen2.png';
import screenThree from '../../../assets/screen3.png';
import LoginModal from '../../../Components/LoginModal'
import Login from '../../Register/Login';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Hero = () => {

  const [openModal, setOpenModal] = useState(false);

  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const duration1 = 0.5;
  const duration2 = 1;

  // Set up the Intersection Observer for the first element
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust this threshold value as needed
  });

  // Set up the Intersection Observer for the second element
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust this threshold value as needed
  });

  useEffect(() => {
    if (inView1) {
      // When the first element is in view, trigger animation for it
      // You can use Framer Motion to animate it here
    }
  }, [inView1]);

  useEffect(() => {
    if (inView2) {
      // When the second element is in view, trigger animation for it
      // You can use Framer Motion to animate it here
    }
  }, [inView2]);

  return (
    <div className='flex flex-row m-10 flex-wrap justify-between lg:justify-around items-center'>
      <motion.div
        className="one font-black"
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={fadeLeft}
        transition={{ duration: duration2 }}
      >
        <p className='l-hero-text font-semibold text-2xl lg:text-4xl'>
          Become part of the expansive <br /> 
          community of customers seeking <br /> 
          highly skilled beauty <br /> professionals.
        </p>
        <Link to='/Login'>
          <button className='bg-[#121111] py-3 px-8 my-7 text-sm rounded-md text-white hover:bg-slate-800'>Get Started</button>
        </Link>
      </motion.div>

      <motion.div
        className="two flex flex-row items-center"
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={fadeRight}
        transition={{ duration: duration1 }}
      >
        <img src={screenOne} className='mr-[-45px] w-[150px] lg:w-[200px]' alt="" />
        <img src={screenTwo} className='z-[20] w-[130px] lg:w-[180px]' alt="" />
        <img src={screenThree} className='ml-[-45px] w-[150px] lg:w-[210px]' alt="" />
      </motion.div>
    </div>
  );
};

export default Hero;
