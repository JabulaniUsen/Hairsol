import React, { useState } from 'react';
import img1 from '../../../assets/img1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      name: 'Daphne Augustine',
      location: 'Accra | Beautician',
      story:
        "Serene Beauty isn’t just any other salon. It’s a complete cut above the rest. Every visit is always a treat and you’re always made to feel special. Sarah never takes her customers for granted and she strives to always deliver something above and beyond ordinary expectations. I cannot recommend Serene Beauty highly enough.",
      number: 1,
      img: img1,
    },
    {
      name: 'Joshua Akan',
      location: 'Lagos | Nigeria',
      story:
        "Serene Beauty isn’t just any other salon. It’s a complete cut above the rest. Every visit is always a treat and you’re always made to feel special. Sarah never takes her customers for granted and she strives to always deliver something above and beyond ordinary expectations. I cannot recommend Serene Beauty highly enough.",
      number: 2,
      img: img1,
    },
    {
      name: 'Mark Ben',
      location: 'London | UK',
      story:
        "Serene Beauty isn’t just any other salon. It’s a complete cut above the rest. Every visit is always a treat and you’re always made to feel special. Sarah never takes her customers for granted and she strives to always deliver something above and beyond ordinary expectations. I cannot recommend Serene Beauty highly enough.",
      number: 3,
      img: img1,
    },
    {
      name: 'Daphne Augustine',
      location: 'Accra | Beautician',
      story:
        "Serene Beauty isn’t just any other salon. It’s a complete cut above the rest. Every visit is always a treat and you’re always made to feel special. Sarah never takes her customers for granted and she strives to always deliver something above and beyond ordinary expectations. I cannot recommend Serene Beauty highly enough.",
      number: 4,
      img: img1,
    },
    {
      name: 'Daphne Augustine',
      location: 'Accra | Beautician',
      story:
        "Serene Beauty isn’t just any other salon. It’s a complete cut above the rest. Every visit is always a treat and you’re always made to feel special. Sarah never takes her customers for granted and she strives to always deliver something above and beyond ordinary expectations. I cannot recommend Serene Beauty highly enough.",
      number: 5,
      img: img1,
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === stories.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? stories.length - 1 : prevIndex - 1));
  };

  const currentStory = stories[currentIndex];

  return (
    <div className='flex flex-wrap justify-center items-center gap-5 lg:gap-20 my-20'>
       <div className="side1">
            <img src={ currentStory.img } className='w-[350px]' alt="" />
       </div>
       <div className="testimonials w-[400px] flex flex-col gap-2">
            <h3 className='montserrat text-sm'>TESTIMONIALS</h3>
            <h1 className="name syne text-3xl font-bold">{currentStory.name}</h1>
            <p className="montserrat text-lg location">{currentStory.location}</p>
            <p className="montserrat story">{currentStory.story}</p>
        
            <div className="montserrat controls mt-[100px] flex items-center gap-2">
                <button onClick={handlePrev} className='flex items-center'>
                    <FontAwesomeIcon className='border-2 border-black rounded-full p-2 mx-2 hover:bg-[#FB7902] hover:border-[#FB7902] hover:text-white' icon={faArrowLeft} /> 0{currentStory.number} 
                </button>
                <p className='text-3xl'>|</p> 
                <button onClick={handleNext} className='flex items-center'>05 
                    <FontAwesomeIcon icon={faArrowRight} className='border-2 border-black rounded-full p-2 mx-2 hover:bg-[#FB7902] hover:border-[#FB7902] hover:text-white' />
                </button>
            </div>
        </div>
    </div>
  );
};

export default Testimonials;
