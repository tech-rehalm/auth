import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar justify-between bg-gray-900 fixed top-0 '>
        <h1 className="font-bold text-xl text-green-400 ">Authentication</h1>
        <div className="flex">
             <Link href="/register" className=' font-semibold p-2 rounded-lg transition duration-500 hover:bg-green-400  hover:text-gray-950 mx-2'>Register</Link>
             <Link href="/signin" className=' font-semibold p-2 rounded-lg transition duration-500 hover:bg-green-400  hover:text-gray-950 mx-2'>Sign In</Link>
        </div>
       
    </div>
  )
}
