import {
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import Image from 'next/image'

import avatar from '../public/avatar.png'
import logoMobile from '../public/logo-mobile.svg'
import logo from '../public/logo.svg'

const Header = () => {
  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
      <div className="mx-5 flex max-w-6xl justify-between lg:mx-auto ">
        <div className=" relative hidden w-24 cursor-pointer lg:inline-grid">
          <Image src={logo} alt="" fill="true" className="object-contain" />
        </div>
        <div className="relative w-10 flex-shrink-0 cursor-pointer lg:hidden">
          <Image
            src={logoMobile}
            alt=""
            fill="true"
            className="object-contain"
          />
        </div>
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="search"
              className="block w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-black focus:ring-black sm:text-sm"
            />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navButton" />
          <MenuIcon className="h-6 w-6 cursor-pointer md:hidden" />
          <div className="navButton relative">
            <PaperAirplaneIcon className="navButton rotate-45" />
            <div className="absolute -top-1 -right-3 text-xs w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
          </div>
          <PlusCircleIcon className="navButton" />
          <UserGroupIcon className="navButton" />
          <HeartIcon className="navButton" />
          <Image
            src={avatar}
            alt="user profile picture"
            className="h-10 w-10 cursor-pointer rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
