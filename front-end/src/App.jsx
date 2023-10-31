import AboutUs from "./Pages/AboutUs/AboutUs"
import Homepage from "./Pages/Homepage/Homepage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./Pages/LandingPage/LandingPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/landingpage" element={<LandingPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
