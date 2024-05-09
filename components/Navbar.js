import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white flex justify-between items-center h-12 px-4'>
        <div className="logo font-bold text-lg">GetMeaTea</div>
      <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
