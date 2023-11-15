import React, { useState } from 'react';
import braids from '../../../assets/braids.png';
import naturalHair from '../../../assets/natural-hair.png';
import haircut from '../../../assets/haircut.png';
import mensHaircut from '../../../assets/mens-haircut.png';
import locs from '../../../assets/locs.png';
import silkPress from '../../../assets/silk-press.png';
import weaves from '../../../assets/weaves.png';
import eyelashes from '../../../assets/eye-lashes.png';
import nails from '../../../assets/nails.png';
import kids from '../../../assets/kids.png';
import LoginModal from '../../../Components/LoginModal';


const Services = () => {

  const [openModal, setOpenModal] = useState(false);

  const data = [
    { img: braids, title: 'Braids' },
    { img: naturalHair, title: 'Natural Hair' },
    { img: haircut, title: 'Haircut' },
    { img: mensHaircut, title: "Men's Haircut" },
    { img: locs, title: 'Locs' },
    { img: silkPress, title: 'Silk Press' },
    { img: weaves, title: 'Weaves' },
    { img: eyelashes, title: 'Eyelashes' },
    { img: nails, title: 'Nails' },
    { img: kids, title: 'Kids' }
  ];

  return (
    <div className='flex flex-col mx-24 items-center '>
      <div className="services-header my-5">
        <h1 className='text-xl font-semibold'>Find top pros by service</h1>
      </div>

        <div className="flex items-center justify-center gap-4 flex-wrap">
        {data.map((item, index) => (
          <div className="box flex flex-col items-center" key={index}>
            <div className="img">
              <img src={item.img} className='w-[200px]' alt={item.title} />
            </div>
            <button className='border-2 border-black w-[100%] text-center p-2'>{item.title}</button>
          </div>
        ))}
        </div>
        {openModal && <LoginModal closeModal={() => setOpenModal(false)} />}
        {/* {openLogin && <LoginLogin closeLogin={() => setOpenLogin(false)} />} */}
    </div>
  );
}
export default Services;
