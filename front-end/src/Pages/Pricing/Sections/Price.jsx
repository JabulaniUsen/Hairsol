import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import pricing from '../../../assets/pricing.png'
import chat from '../../../assets/chat.png'
import smart from '../../../assets/smart.png'

function Price() {

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
    <div className='p-text flex flex-col justify-center items-center gap-5 mx-10 my-11'>
        <div className="p-header flex flex-col justify-center items-center gap-5">
            <h1 className='p-text font-bold text-4xl'>Simple Pricing that Fits Your Style</h1>
            <p className=' w-[500px] text-center'>
                Our flexible pricing options are tailored to meet your needs as you grow.
                Powerful tools to match your business requirements. We believe the basic
                scheduling tools should be free. No contracts.
            </p>
        </div>

        <div className="p-body flex flex-row items-center justify-between gap-10 flex-wrap">
            <div className="premium flex flex-col items-left justify-between p-5 border-lime-300 hover:border-2 rounded-xl shadow-2xl">
                <div className="">
                    <h3 className='bg-[#7bc711] p-1 px-3 rounded-full w-[115px] text-sm font-semibold'>Most Popular</h3>
                    <h1 className='font-bold text-3xl my-2 py-3'>Premium</h1>
                    <p>
                        Your business your way. More flexibility and lower <br /> fees.
                    </p>
                    <button className='bg-[#121111] p-2 px-4 rounded-lg text-white'>Start Free Trial</button>

                    <div className="features flex flex-col gap-5 my-8">
                        <div className="flex">
                            
                            <p>✅ Calendar and Appointments</p>
                        </div>
                        <div className="flex">
                            
                            <p>✅ No Show Late Cancellation</p>
                        </div>
                        <div className="flex">
                            
                            <p>✅ New Client Connection</p>
                        </div>
                        <div className="flex">
                            
                            <p>✅ Smart Pricing</p>
                        </div>
                        <div className="flex">
                            
                            <p>✅ Flexibility to Accept New Clients</p>
                        </div>
                        <div className="flex">
                            
                            <p>✅ Flexibility to Control Smart Pricing</p>
                        </div>
                        <div className="flex">
                            
                            <p>✅ Flexible Payment Options</p>
                        </div>
                        <div className="flex">
                            
                            <p>✅ Low Processing Fees 2.75%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="premium flex flex-col items-left justify-between p-5 border-lime-300 hover:border-2 rounded-xl shadow-2xl">
                <div className="">
                    <h3 className='bg-[#7bc711] p-1 px-3 rounded-full w-[115px] text-sm font-semibold'>Most Popular</h3>
                    <h1 className='font-bold text-3xl my-2 py-3'>Basic</h1>
                    <p>
                        Get started with essential tools for your business.
                    </p>
                    <button className='bg-[#121111] p-2 px-4 rounded-lg text-white'>Start Free Trial</button>

                    <div className="features flex flex-col gap-5 my-8">
                        <div className="flex">
                            
                            <p>✅ Calendar and Appointments</p>
                        </div>
                        <div className="flex">
                            
                            <p>✅ No Show Late Cancellation</p>
                        </div>
                        <div className="flex">
                            <p>✅ New Client Connection</p>
                        </div>
                        <div className="flex">
                            
                            <p>✅ Smart Pricing</p>
                        </div>
                        <div className="flex">
                            <p>❌ Flexibility to Accept New Clients</p>
                        </div>
                        <div className="flex">
                            <p>❌ Flexibility to Control Smart Pricing</p>
                        </div>
                        <div className="flex">
                            <p>❌ Flexible Payment Options</p>
                        </div>
                        <div className="flex">
                            <p>❌ Processing Fees 3%</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className="">
            <div className="p-header flex flex-col justify-center items-center gap-5">
                <h1 className='p-text font-bold text-4xl w-[800px] text-center my-10'>Elevate Your Business and Enhance Client Experience with Powerful Features</h1>
            </div>

            <div className='flex flex-row m-10 my-20 flex-wrap justify-between lg:justify-around gap-10 items-center'>
                <motion.div
                    className="two flex flex-row items-center"
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeUp}
                    transition={{ duration }}
                >
                    <img src={pricing} className='w-[400px]' alt="" />
                </motion.div>

                <motion.div
                    className="one text-left"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeDown}
                    transition={{ duration }}
                >
                    <h1 className='gain-header text-2xl my-7 font-bold'>New Client Connection</h1>
                    <p className='gain-text w-[480px]'>
                        Expand your reach and attract new clients effortlessly.
                        Let us handle the marketing while you build lasting
                        connections, increase your revenue, and enjoy a fully
                        booked schedule. You pay just once per new client.
                    </p>
                    <p>30% one-time commission</p>
                    <button className='bg-[#121111] py-3 px-8 my-7 text-sm rounded-md text-white'>Learn More</button>
                </motion.div>
            </div>  

            <div className='flex flex-row my-10 p-10 flex-wrap justify-between lg:justify-around items-center'>
                <div className="one ">
                    <h1 className='l-hero-text text-2xl lg:text-4xl font-black'>
                        In-App Messaging
                    </h1>
                    <p className='w-[400px] mt-3'>
                        Message your clients right on StyleSeat! Chat with
                        new clients and regulars without sharing your personal
                        phone number. Keep all of your conversations in one
                        place — never losing track of a message again!
                    </p>
                    <button className='bg-[#121111] py-3 px-8 my-7 text-sm rounded-md text-white'>Get Started</button>
                </div>

                <div className="two flex flex-row items-center">
                    <img src={chat} className='mr-[-45px] w-[450px]' alt="" />
                </div>
            </div>


            <div className='flex flex-row m-10 my-20 flex-wrap justify-between lg:justify-around gap-10 items-center'>
                <motion.div
                    className="two flex flex-row items-center"
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeUp}
                    transition={{ duration }}
                >
                    <img src={smart} className='w-[400px]' alt="" />
                </motion.div>

                <motion.div
                    className="one text-left"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeDown}
                    transition={{ duration }}
                >
                    <h1 className='gain-header text-2xl my-7 font-bold'>Smart Pricing</h1>
                    <p className='gain-text w-[480px]'>
                        Earn an extra $3K a year on average when you
                        capitalize on your popular booking times. We use data
                        science to analyze your business, identify your most
                        popular time slots and raise the prices slightly to
                        match their true value.
                    </p>
                    <p>5.5% commision per Smart Priced appointment</p>
                    <button className='bg-[#121111] py-3 px-8 my-7 text-sm rounded-md text-white'>Get Started</button>
                </motion.div>
            </div> 

            <div className='flex flex-row m-10 my-20 flex-wrap justify-left lg:justify-left gap-10 items-center'>
                <motion.div
                    className="one text-left"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeDown}
                    transition={{ duration }}
                >
                    <h1 className='gain-header text-2xl my-7 font-bold'>Robust Payment System</h1>
                    <p className='gain-text w-[480px]'>
                        Flat fee per card transaction. Unlike other platforms,
                        we offer a single low rate for all transaction types,
                        including swipes, card-on-file, and key-ins. 
                        <br />
                        Offer your clients a range of convenient payment
                        options, including credit/debit, contactless payment
                        with tap-to-pay on iPhone, and even the flexibility to
                        pay with installments. Meanwhile you receive full
                        upfront payment.
                    </p>
                    <p>5.5% commision per Smart Priced appointment</p>
                    <button className='bg-[#121111] py-3 px-8 my-7 text-sm rounded-md text-white'>Get Started</button>
                </motion.div>
            </div>  
        </div>
    </div>
  )
}

export default Price