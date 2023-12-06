import React, { useEffect } from 'react';
import call from '../../../assets/chat.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Calls() {
  const springAnimation = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  const springConfig = {
    type: 'spring',
    damping: 10,
    stiffness: 100,
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const duration = 0.5;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust this threshold value as needed
  });

  useEffect(() => {
    if (inView) {
      // Trigger spring animation when the element is in view
    }
  }, [inView]);

  return (
    <div className='calls'>
      <div className="text-center flex flex-col justify-center my-24">
        <h1 className='call-header text-xl font-bold'>Stop the endless calls, texts and <br /> DMs</h1>
        <p className="call-text w-[400px] lg:w-[500px] m-auto my-5">
          Dispatch appointment reminders to your clients without 
          restrictions or additional charges (unlike other providers). 
          We'll even alert your waitlist about last-minute openings.
        </p>
      </div>

      <div className='flex flex-row m-10 my-20 flex-wrap justify-between lg:justify-around items-center'>
        <motion.div
          className="two flex flex-row items-center"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeLeft}
          duration={duration}
          transition={{ type: 'spring', ...springConfig }}
        >
          <img src={call} className='w-[400px]' alt="" />
        </motion.div>

        <motion.div
          className="one text-left"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={springAnimation}
          transition={{ type: 'spring', ...springConfig }}
        >
          <h1 className='gain-header text-2xl lg:mt-0 mt-5'>
            Keep your cell number private <br />
            with in-app client messaging
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Calls;
