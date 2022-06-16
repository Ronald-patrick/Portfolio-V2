import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import { HomeIcon,CollectionIcon,ChatAlt2Icon } from "@heroicons/react/solid";
function Header() {

  const router = useRouter();

  return (
    <header className="flex justify-between p-4 max-w-7xl mx-auto md:border-b-2 ">
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
            <h1 className={`flex justify-center items-center cursor-pointer hover:text-primary ${router.pathname === "/" && "text-primary" }`}><HomeIcon className='w-7 mr-2 h-7'/> Home</h1>
        </Link>
        <Link href="/projects">
            <h1 className={`flex justify-center items-center cursor-pointer hover:text-primary ${router.pathname === "/projects" && "text-primary" }`}><CollectionIcon className='w-7 mr-2 h-7'/> Projects</h1>
        </Link>
        <Link href="/contact">
            <h1 className={`flex justify-center items-center cursor-pointer hover:text-primary ${router.pathname === "/contact" && "text-primary" }`}><ChatAlt2Icon className='w-7 mr-2 h-7'/> Contact</h1>
        </Link>
    </div>  
  </header>
  )
}

export default Header