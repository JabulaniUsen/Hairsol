import React, { useEffect } from 'react';
import invest from '../../../assets/invest.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Invest() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeDown = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const duration = 0.6;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust this threshold value as needed
  });

  useEffect(() => {
    if (inView) {
      // Trigger animation when the element is in view
    }
  }, [inView]);

  return (
    <div className='flex flex-row my-10 p-10 flex-wrap justify-between lg:justify-around items-center bg-[#f2f1f0]'>
      <div className="one ">
        <motion.h1
          className='l-hero-text text-2xl lg:text-4xl font-black'
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ duration }}
        >
          Get $1K-$20K to invest in your business
        </motion.h1>
        <motion.p
          className='w-[400px] mt-3'
          
        >
          Thinking about moving to a new location, upgrading your branding or equipment? Apply for personalized loans through Hairsol and automatically pay them back with a percentage of your daily earnings.
        </motion.p>
        <motion.button
          className='bg-[#121111] py-3 px-8 my-7 text-sm rounded-md text-white'
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeDown}
          transition={{ duration }}
        >
          Get Started
        </motion.button>
        <br />
        <small>All loans subject to credit approval.</small>
      </div>

      <motion.div
        className="two flex flex-row items-center"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeDown}
        transition={{ duration }}
      >
        <img src={invest} className='mr-[-45px] w-[450px]' alt="" />
      </motion.div>
    </div>
  );
}

export default Invest;
