"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"

const Dashboard = () => {
  const { data: session } = useSession()
  if (!session) {
    const router = useRouter()
    router.push("/login")
  }
  return (
    // user form
    <>
    <div className="flex justify-center items-center h-screen">
      <div className="w-[400px] p-4 bg-slate-900 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-5">Create Your Page</h2>
        <form className="flex flex-col gap-2">
          <input type="text" className="p-3 rounded-lg bg-gray-800" placeholder="Enter Your Name" />
          <input type="text" className="p-3 rounded-lg bg-gray-800" placeholder="Enter Your Bio" />
          <input type="text" className="p-3 rounded-lg bg-gray-800" placeholder="Enter Your Goal" />
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Create</button>
        </form>
      </div>
      </div>
    </>
  )
}

export default Dashboard
