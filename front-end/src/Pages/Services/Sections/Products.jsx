import React from 'react'
import phnes from '../../../assets/Phnes.png'
import jab from '../../../assets/Jab.png'

function Products() {
  return (
    <div className='flex justify-center flex-wrap items-start gap-10 my-24'>
        <div className="side1 flex flex-wrap gap-10">

          <div className="">
            <h1 className='product-header pb-7 text-[#eca460] text-xl'>By Categories</h1>
            <ul className='product-list'>
              <li>Makeup</li>
              <li>Hair</li>
              <li>Skincare</li>
              <li>Waxing</li>
              <li>Spa</li>
            </ul>
          </div>

          <div className="">
            <h1 className='product-header pb-7 text-[#eca460] text-xl'>By Categories</h1>
            <ul className='product-list'>
              <li>Phnes Bags</li>
              <li>Jab Jewelries</li>
              <li>Doris C. Haven</li>
              <li>Ama Clothing Shop</li>
              <li>Judenre Hairline</li>
            </ul>
          </div>

        </div>

        <div className="side2 flex flex-wrap justify-center items-center gap-10">
          <img src={phnes} className='w-[300px]' alt="" />
          <img src={jab} className='w-[300px]' alt="" />
        </div>
    </div>
  )
}

export default Products