import React from 'react'
import card from '../../../assets/card.png'
import noShow from '../../../assets/no-show.png'
import deposit from '../../../assets/deposit.png'

function Book() {
  return (
    <div className='bg-[#f4ebde] mt-32 px-5 py-10'>
      <div className="book-header text-center mb-10">
        <h1 className='omor font-bold text-2xl'>
          Attract clients who are serious <br />
          about booking.
        </h1>
      </div>

      <div className="flex flex-row justify-between items-center flex-wrap gap-10 lg:gap-0">

        <div className="1st flex flex-col justify-center items-center text-center flex-wrap">
          <img src={card} alt="" />
          <h1 className="sub-head font-bold mt-1 mb-3 text-lg">Card on File</h1>
          <p className="sub-text w-[400px]">
            Clients must put a card on file to reserve an appointment, and
            we validate the card to ensure it has enough funds to cover your
            no-show fee.
          </p>
        </div>

        <div className="2nd flex flex-col justify-center items-center text-center flex-wrap">
          <img src={noShow} alt="" />
          <h1 className="sub-head font-bold mt-1 mb-3 text-lg">No-Show Protection</h1>
          <p className="sub-text w-[400px]">
            Your time is valuable, and we believe every professional should
            have access to no-show protection at no extra cost.
          </p>
        </div>

        <div className="3rd flex flex-col justify-center items-center text-center flex-wrap">
          <img src={deposit} alt="" />
          <h1 className="sub-head font-bold mt-1 mb-3 text-lg">Deposits at Booking</h1>
          <p className="sub-text w-[400px]">
            Coming Soon: <br />
            You'll also have the option to require a deposit at booking
          </p>
        </div>
      </div>
    </div>
  )
}

export default Book