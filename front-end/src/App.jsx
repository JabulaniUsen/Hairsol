import AboutUs from "./Pages/AboutUs/AboutUs"
import Homepage from "./Pages/Homepage/Homepage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage/>} />
          <Route path="/about" element={<AboutUs/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
