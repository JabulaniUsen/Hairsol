import React, { useEffect } from 'react';
import card from '../../../assets/card.png';
import noShow from '../../../assets/no-show.png';
import deposit from '../../../assets/deposit.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Book() {
  const fadeAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const duration = 0.5;

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust this threshold value as needed
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust this threshold value as needed
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust this threshold value as needed
  });

  useEffect(() => {
    if (inView1) {
      // Trigger animation for the first element when it's in view
    }
  }, [inView1]);

  useEffect(() => {
    if (inView2) {
      // Trigger animation for the second element when it's in view
    }
  }, [inView2]);

  useEffect(() => {
    if (inView3) {
      // Trigger animation for the third element when it's in view
    }
  }, [inView3]);

  return (
    <div className='bg-[#f4ebde] mt-32 px-5 py-10'>
      <div className="book-header text-center mb-10">
        <h1 className='omor font-bold text-2xl'>
          Attract clients who are serious <br />
          about booking.
        </h1>
      </div>

      <div className="flex flex-row justify-between items-center flex-wrap gap-10 lg:gap-0">

        <motion.div
          className="1st flex flex-col justify-center items-center text-center flex-wrap"
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={fadeAnimation}
          transition={{ duration }}
        >
          <img src={card} alt="" />
          <h1 className="sub-head font-bold mt-1 mb-3 text-lg">Card on File</h1>
          <p className="sub-text w-[400px]">
            Clients must put a card on file to reserve an appointment, and
            we validate the card to ensure it has enough funds to cover your
            no-show fee.
          </p>
        </motion.div>

        <motion.div
          className="2nd flex flex-col justify-center items-center text-center flex-wrap"
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={fadeAnimation}
          transition={{ duration }}
        >
          <img src={noShow} alt="" />
          <h1 className="sub-head font-bold mt-1 mb-3 text-lg">No-Show Protection</h1>
          <p className="sub-text w-[400px]">
            Your time is valuable, and we believe every professional should
            have access to no-show protection at no extra cost.
          </p>
        </motion.div>

        <motion.div
          className="3rd flex flex-col justify-center items-center text-center flex-wrap"
          ref={ref3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={fadeAnimation}
          transition={{ duration }}
        >
          <img src={deposit} alt="" />
          <h1 className="sub-head font-bold mt-1 mb-3 text-lg">Deposits at Booking</h1>
          <p className="sub-text w-[400px]">
            Coming Soon: <br />
            You'll also have the option to require a deposit at booking
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Book;
