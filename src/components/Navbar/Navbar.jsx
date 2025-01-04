import React from 'react'
import Logo from '../../assets/img/logo.png'

const Navbar = () => {
  return (
    <>
    {/* Navbar/Header */}
    <div className='container mx-auto flex items-center justify-between px-2'>
        {/* Logo */}
        <div>
            <img src={Logo} alt="Logo" />
        </div>
        {/* NavLinks */}
        <ul className='flex items-center gap-5 hidden 1150px:flex'>
            <li><a className='underline text-[#003AAA]' href="/">Home</a></li>
            <li><a href="/">Products</a></li>
            <li><a href="/">BestDeals</a></li>
            <li><a href="/">Offer</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
        {/* Header Buttons */}
        <div className='flex items-center gap-2'>
            <button className='buttons'>Sign up</button>
            <button className='buttons'>Log in</button>
        </div>
    </div>
      
    </>
  )
}

export default Navbar
