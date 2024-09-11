'use client'
import Image from "next/image"
import Link from "next/link"
import Button from "../Button/Button"
import NavItems from "../NavItem/NavItem"
import { useEffect, useState } from "react"
import Avatar from "../Avatar/Avatar"

const Header = () => {
  const [userDetails, setUserDetails] = useState([])
  useEffect(() => {
    const data = localStorage.getItem('eventData');
    if (data) {
      setUserDetails(JSON.parse(data));
    }
    else {
      setUserDetails([]); // Ensure storedData is always an array
    }
  }, []);

  return (
    <header className="w-full border-b">
      <div className="wrapper-px wrapper flex items-center justify-between">
        <Link href="/" className="w-fit">
          <div className={`w-full flex gap-0 items-center`}>
            <Image src='/assets/images/logo_1.png'width={1000} height={100} alt='logo' className='w-20' />
            {
              <h1 className={`flex-shrink-0 text-xl font-medium transition-all duration-300 text-black dark:text-white`}>EventElite</h1>
            }
          </div>
        </Link>

        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems />
        </nav>

        <div className="flex w-32 justify-end gap-3">
          {/* <MobileNav /> */}
          {
            userDetails ?
              <Avatar size='xs'></Avatar>
              :
              <Button asChild className="rounded-full button !h-auto bg-primary text-white dark:bg-black dark:bg-primary-50" size="lg">
                <Link href="/login">
                  Login
                </Link>
              </Button>
          }
        </div>
      </div>
    </header>
  )
}

export default Header
