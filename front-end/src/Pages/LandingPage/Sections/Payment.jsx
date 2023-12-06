import React, { useEffect } from 'react';
import payment from '../../../assets/payment.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Payment() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  };

  const duration = 1;
  const duration2 = 0.5;

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
    <div className='payment'>
      <div className="text-center flex flex-col justify-center my-24">
        <motion.h1
          className='call-header text-xl font-bold'
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ duration2 }}
        >
          Get more exposure and accept <br />all payment types
        </motion.h1>
        <motion.p
          className="call-text w-[400px] lg:w-[500px] m-auto my-5"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeLeft}
          transition={{ duration }}
        >
          Clients can pay with a credit or debit card, Klarna, Apply Pay, Google Pay, or other mobile wallets.
        </motion.p>
      </div>

      <div className='flex flex-row m-10 my-20 flex-wrap justify-between lg:justify-around items-center'>
        <motion.div
          className="two flex flex-row items-center"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeRight}
          transition={{ duration }}
        >
          <img src={payment} className='w-[400px]' alt="" />
        </motion.div>

        <div className="one text-left">
          <motion.h1
            className='gain-header text-2xl lg:mt-0 mt-5'
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeLeft}
            transition={{ duration }}
          >
            Make Payments fast, <br />easy, and secure
          </motion.h1>
        </div>
      </div>

      
    </div>
  );
}

export default Payment;
