'use client'
import Image from "next/image"
import Link from "next/link"
import Button from "../Button/Button"
import NavItems from "../NavItem/NavItem"
import { useEffect, useState } from "react"
import Avatar from "../Avatar/Avatar"
import MobileNav from "../MobileNav/MobileNav"
import UserProfilePopup from "../UserProfile/UserProfilePopup"

const Header = () => {
  const [userDetails, setUserDetails] = useState(null)
  useEffect(() => {
    const data = localStorage.getItem('userData');
    if (data) {
      setUserDetails(JSON.parse(data));
    }
  }, []);

  return (
    <header className="w-full border-b">
      <div className="wrapper-px wrapper flex items-center justify-between">
        <Link href="/" className="w-fit">
          <div className={`w-full flex gap-0 items-center`}>
            <Image src='/assets/images/logo_1.png' width={1000} height={100} alt='logo' className='w-20' />
            {
              <h1 className={`flex-shrink-0 text-xl font-medium transition-all duration-300 text-black dark:text-white`}>EventElite</h1>
            }
          </div>
        </Link>

        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems />
        </nav>

        <div className="flex w-32 justify-end gap-3">
          <MobileNav />
          <div className="hidden md:flex">
            {
              userDetails ?
                <UserProfilePopup/>
                :
                <Button asChild className="hidden md:flex rounded-full button !h-auto bg-primary text-white dark:bg-primary-50" size="lg">
                  <Link href="/login">
                    Login
                  </Link>
                </Button>
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
