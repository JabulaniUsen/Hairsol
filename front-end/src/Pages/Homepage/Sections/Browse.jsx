import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);


const Browse = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const [activeSection2, setActiveSection2] = useState(null);

  const toggleSection2 = (index) => {
    setActiveSection2(activeSection2 === index ? null : index);
  };

  const sections = [
    {
      title: 'Dallas',
      content: 'This is the content of Dallas.',
    },
    {
      title: 'Chicago',
      content: 'This is the content of Chicago.',
    },
    {
      title: 'Atlanta',
      content: 'This is the content of Atlanta.',
    },
    {
        title: 'Washinton, D.C.',
        content: 'This is the content of Washinton D.C..',
      },
      {
        title: 'Los Angeles',
        content: 'This is the content of section 3.',
      },
  ];



  const sections2 = [
    {
      title: 'Houston',
      content: 'This is the content of Houston.',
    },
    {
      title: 'Detroit',
      content: 'This is the content of Detroit.',
    },
    {
      title: 'Charlotte',
      content: 'This is the content of Charlotte.',
    },
    {
        title: 'Columbus',
        content: 'This is the content of Columbus',
      },
      {
        title: 'Newport News',
        content: 'This is the content of Newport News.',
      },
  ];

  return (
    <div className=''>
      <div className='browse-header text-center'>
        <h1 className='font-black'>Browse popular hair services</h1>
      </div>

      <div className="location flex gap-10 items-center justify-center flex-wrap m-5">
        <div className='accordion '>
            {sections.map((section, index) => (
            <div key={index} className='accordion-section'>
                <button
                className='accordion-header relative flex justify-start p-4 pr-10 w-[100%] border-b-2'
                onClick={() => toggleSection(index)}
                >
                {section.title}
                {activeSection === index ? (
                    <FontAwesomeIcon icon='fas fa-chevron-up' className='absolute right-0'/>
                ) : (
                    <FontAwesomeIcon icon='fas fa-chevron-down' className='absolute right-0'/>
                )}
                </button>
                <div
                className={`accordion-content ${
                    activeSection === index ? 'open' : ''
                }`}
                >
                {section.content}
                </div>
            </div>
            ))}
        </div>

        <div className='accordion '>
            {sections2.map((section2, index) => (
            <div key={index} className='accordion-section'>
                <button
                className='accordion-header relative flex justify-start p-4 pr-10 w-[100%] border-b-2'
                onClick={() => toggleSection2(index)}
                >
                {section2.title}
                {activeSection2 === index ? (
                    <FontAwesomeIcon icon='fas fa-chevron-up' className='absolute right-0'/>
                ) : (
                    <FontAwesomeIcon icon='fas fa-chevron-down' className='absolute right-0'/>
                )}
                </button>
                <div
                className={`accordion-content ${
                    activeSection2 === index ? 'open' : ''
                }`}
                >
                {section2.content}
                </div>
            </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Browse;

