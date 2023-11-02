import AboutUs from "./Pages/AboutUs/AboutUs"
import Homepage from "./Pages/Homepage/Homepage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./Pages/LandingPage/LandingPage"
import { motion } from 'framer-motion'
import Pricing from "./Pages/Pricing/Pricing"
import Payment from "./Pages/Payment/Payment"
import Services from "./Pages/Services/Services"
import Booking from "./Pages/BookingPage/Booking"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage/>} />
          <Route path="/homepage" element={<Homepage/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/booking" element={<Booking/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App