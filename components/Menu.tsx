import React, { useEffect, useState } from 'react'
import { MenuAlt3Icon, HomeIcon, CollectionIcon, ChatAlt2Icon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Link from 'next/link';

const MobileMenu = () => {
    const [isOpen, setisOpen] = useState(false);
    const router = useRouter();
    const viewHandler = () => {
        setisOpen(!isOpen);
    }
    useEffect(() => {
      setisOpen(false);
      
    }, [router.pathname])
    
    return (
        <>
            <div onClick={viewHandler} className='z-20 md:hidden fixed bottom-5 right-5 border-4 shadow-lg bg-secondary rounded-full'>
                <MenuAlt3Icon className='w-16 h-16 text-primary p-2' />
            </div>
            {isOpen &&
                <div className='gap-3 md:hidden z-10 w-[120px] h-[270px] fixed bottom-10 right-10 border-2 bg-secondary rounded-lg flex flex-col justify-center items-center'>
                    <Link href="/">
                        <HomeIcon className={`w-12 h-12 ${router.pathname === "/" ? "text-primary" : "text-white"}`} />
                    </Link>
                    <Link href="/projects">
                        <CollectionIcon className={`w-12 h-12 ${router.pathname === "/projects" ? "text-primary" : "text-white"}`} />
                    </Link>
                    <Link href="/contact">
                        <ChatAlt2Icon className={`w-12 h-12 ${router.pathname === "/contact" ? "text-primary" : "text-white"}`} />
                    </Link>

                </div>
            }
        </>
    )
}

export default MobileMenu