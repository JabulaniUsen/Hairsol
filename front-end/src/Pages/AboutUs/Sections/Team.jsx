import React from 'react';
import ethan from '../../../assets/ethan.png'
import cynthia from '../../../assets/cynthia.png'
import angela from '../../../assets/angela.png'

const Team = () => {
  const team = [
    {
      img: ethan,
      name: "James Ethan",
      about: "James is the serene soul behind Serene Beauty's spa and wellness offerings. With a wealth of experience in esthetics and..."
    },
    {
      img: cynthia,
      name: "Cynthia Makafui",
      about: "Cynthia is the visionary artist responsible for the salon's stunning makeup transformations. Her creativity knows..."
    },
    {
      img: angela,
      name: "Angela Goodwill",
      about: "Angela is the nail guru who turns manicures and pedicures into works of art. Her meticulous attention to detail and..."
    }
  ];
 
  return (
    <div className='mx-10 lg:m-40'>
      <div className="team-header mt-20 flex lg:justify-between items-center flex-wrap">
        <div className="sideOne w-[550px]">
          <h1 className="text-3xl">Meet <span className='text-[#fb7902]'>Our Team</span></h1>
          <p className='leading-7 mt-3 mb-2'>
            Allow me to introduce you to the talented individuals
            who make Serene Beauty the extraordinary place it is.
          </p>
        </div>

        <div className="sideTwo">
          <button className='py-3 px-8 text-sm text-white bg-slate-900 hover:bg-slate-800 '>Explore All Team</button>
        </div>
      </div>

      <div className="team-body flex justify-between flex-wrap gap-10 my-5">
      {team.map((item, index) => (
        <div className=" flex flex-col w-[300px] gap-3" key={index}>
          <img 
            className='w-[300px]'
            src={item.img} 
            alt="" />
          <h1 className='text-2xl font-bold'>{item.name}</h1>
          <p>{item.about}</p>
          <small className='text-[#fb7902] font-bold'>Read More</small>
        </div>
      ))}
      </div>
  </div>
  );
};

export default Team;
