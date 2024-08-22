import React from 'react'
import Banner from './Banner'
// import { Toaster } from "react-hot-toast";
import Footer from './Footer'
import Freebook from './Freebook'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
    {/* <Toaster/> */}
        <Navbar/>
      <Banner/>
      <Freebook/>
      <Footer/>
      
    </div>
  )
}

export default Home
