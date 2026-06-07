import React from 'react' 
import Topbar from "../Layout/Topbar"
import Navbar from './Navbar'
export const Header = () => {
  return (
    <div>
      <header className='border-b border-gray-200'>

        {/* Topbar */}
        <Topbar />
        {/* navbar */}
        {/* Cart Drawer */}
        <Navbar />
        </header>

    </div>
  )
  
}
