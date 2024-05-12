"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return (
    <nav className='bg-gray-900 text-white flex justify-between items-center h-12 px-4'>
        <div className="logo font-bold text-lg flex items-center justify-center">
          <img src="tea.gif" alt="tea" width={44} />
          <span>Get Me a Tea</span>
          </div>
      {/* <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul> */}

      <div className='flex items-center justify-center'>
        <Link href={"/login"}>
        <button type='button' className='"text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
          Login
        </button></Link>
      </div>
    </nav>
  )
}

export default Navbar
