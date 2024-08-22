import React from 'react'
import Home from './Home'
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div>
        <Toaster/>
        <Home/>
        <Outlet/>
      
    </div>
  )
}

export default Layout
