"use client"
import React, {useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
  
  return (
    <nav className='bg-gray-900 shadow-lg shadow-white text-white flex justify-between items-center h-16 px-4'>
        <Link className="logo font-bold text-lg flex items-center justify-center" href={"/"}>
        <img src="tea.gif" alt="tea" width={44} />
        <span>Get Me a Tea</span>
        </Link>

      {/* <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul> */}

      <div className='relative'>
        {session && <><button onClick={()=>{setShowdropdown(!showdropdown)}} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 mx-4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
        </button>

          <div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} absolute left-[150px] bg-white divide-y divide-gray-500 rounded-lg shadow w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashoard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
              </li>
              <li>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
              </li>
              <li>
                <a onClick={()=>signOut()} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
              </li>
            </ul>
          </div></>
        }

        {/* {session && <Link href={"/dashboard"}><button type='button' className='"text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-blfocus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Dashboard</button></Link>} */}

        {session && <button type='button' className='"text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-blfocus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={() => { signOut() }}>Logout</button>}

        {!session &&
          <Link href={"/login"}>
            <button type='button' className='"text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
              Login
            </button></Link>}
      </div>
    </nav>
  )
}

export default Navbar
