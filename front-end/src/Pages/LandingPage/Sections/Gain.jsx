import React, { useEffect } from 'react';
import gain from '../../../assets/gain.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Gain() {
  const fadeUp = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeDown = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  };
  const duration = 0.5;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust this threshold value as needed
  });

  useEffect(() => {
    if (inView) {
      // Trigger animation when the element is in view
    }
  }, [inView]);

  return (
    <div className='flex flex-row m-10 my-20 flex-wrap justify-between lg:justify-around items-center'>
      <motion.div
        className="two flex flex-row items-center"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        transition={{ duration }}
      >
        <img src={gain} alt="" />
      </motion.div>

      <motion.div
        className="one text-left"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeDown}
        transition={{ duration }}
      >
        <h1 className='gain-header text-2xl my-7 font-bold'>Gain New Clients, Create Lasting <br />Connections</h1>
        <p className='gain-text w-[480px]'>
          Hairsol promotes your business by investing in TV
          ads, Google Ads, digital and social media marketing,
          and more to connect you with quality clients and keep
          your calendar consistently booked. We ensure your
          schedule stays full so you can focus on delivering
          exceptional service.
        </p>
        <button className='bg-[#121111] py-3 px-8 my-7 text-sm rounded-md text-white'>Learn More</button>
      </motion.div>
    </div>
  );
}

export default Gain;
