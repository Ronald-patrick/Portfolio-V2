import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <header className="flex justify-between p-4 max-w-7xl mx-auto md:border-b-2">
    <div className="flex items-center space-x-5">
      <Link href="/">
          <img
            className="w-10 md:w-16 object-contain cursor-pointer"
            src="./logo.png"
            alt="Logo"
          />
      </Link>
    </div>


    <div className="items-center space-x-10 text-white mr-4 text-md tracking-[2px] font-bold hidden md:flex ">
        <Link href="/">
            <h1 className='cursor-pointer hover:text-emerald-600'>Home</h1>
        </Link>
        <Link href="/">
            <h1 className='cursor-pointer hover:text-emerald-600'>Experience</h1>
        </Link>
        <Link href="/">
            <h1 className='cursor-pointer hover:text-emerald-600'>Projects</h1>
        </Link>
        <Link href="/">
            <h1 className='cursor-pointer hover:text-emerald-600'>Skills</h1>
        </Link>
        <Link href="/">
            <h1 className='cursor-pointer hover:text-emerald-600'>Contact</h1>
        </Link>
    </div>  
  </header>
  )
}

export default Header