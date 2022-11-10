/* eslint-disable @next/next/no-img-element */
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
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'
import logoMobile from '../public/logo-mobile.svg'
import logo from '../public/logo.svg'
import { modalState } from '../atoms/modalAtom'
import { useRecoilState } from 'recoil'

const Header = () => {
  const { data: session, status } = useSession()
  const [open, setOpen] = useRecoilState(modalState)
  const router = useRouter()

  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-5 flex max-w-6xl justify-between lg:mx-5 xl:mx-auto">
        <div className=" relative hidden w-24 cursor-pointer lg:inline-grid" onClick={() => router.push('/')}>
          <Image src={logo} alt="" fill="true" className="object-contain" />
        </div>
        <div className="relative w-8 flex-shrink-0 cursor-pointer lg:hidden" onClick={() => router.push('/')}>
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
        <div className="flex items-center justify-end space-x-4" onClick={() => router.push('/')}>
          <HomeIcon className="navButton" />

          {session ? (
            <>
              <div className="navButton relative">
                <PaperAirplaneIcon className="navButton rotate-45" />
                <div className="absolute -top-1 -right-3 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon className="navButton" onClick={() => setOpen(true)} />
              <UserGroupIcon className="navButton" />
              <HeartIcon className="navButton" />
              <img
                onClick={signOut}
                src={session.user.image}
                alt=""
                className="h-10 w-10 cursor-pointer rounded-full"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}

          <MenuIcon className="h-6 w-6 cursor-pointer md:hidden" />
        </div>
      </div>
    </div>
  )
}

export default Header
