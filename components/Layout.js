import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import TopNavigationSearchBar from './shared/TopNavigationSearchBar'

import { MdOutlineSort } from 'react-icons/md'
import { MdFacebook } from 'react-icons/md'
import { SiTwitter } from 'react-icons/si'
import { AiFillHome } from 'react-icons/ai'
import { FaMicrophone } from 'react-icons/fa'
import { AiFillPlayCircle } from 'react-icons/ai'
import { AiFillInfoCircle } from 'react-icons/ai'
import { MdPhoneInTalk } from 'react-icons/md'
import { BsCheck2Square } from 'react-icons/bs'
import { IoIosSend } from 'react-icons/io'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

import SearchData from '../data/SearchData.json'

import Player from '../components/Player'

export default function Layout({ children }) {
  const router = useRouter()

  const menuItems = [
    {
      href: '/',
      title: 'Home',
      icon: <AiFillHome />,
    },
    {
      href: '/episodes',
      title: 'Episodes',
      icon: <FaMicrophone />,
    },
    {
      href: '/shows',
      title: 'Shows',
      icon: <AiFillPlayCircle />,
    },
    {
      href: '/about',
      title: 'About',
      icon: <AiFillInfoCircle />,
    },
    {
      href: '/contact',
      title: 'Contact Us',
      icon: <MdPhoneInTalk />,
    },
    // {
    //   href: '/register',
    //   title: 'Register',
    //   icon: <BsCheck2Square />,
    // },
    // {
    //   href: '/sendepisodes',
    //   title: 'Send Episodes',
    //   icon: <IoIosSend />,
    // },
  ]

  const [sideBar, setSideBar] = useState(false);

  const toggleSidebar = () => {
    setSideBar((prevState) => !prevState)
  }

  return (
    <div className="h-screen overflow-y-hidden bg-[#110E1F]">
      <Head>
        <title>OnTheGo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/onthego.ico" type="image/x-icon" />
      </Head>
      <div className="flex h-full bg-[#110E1F]">
        {/* desktop view */}
        <div className='hidden md:inline'>
          <aside className="h-screen w-[203px] flex-shrink-0 bg-[#1B1730]">
            {/* sidebar-logo */}
            <div className="mx-[18px] mt-[25px]">
              <img
                src="/assets/sidebar-logo.svg"
                alt="logo"
                className="h-[47px] w-[166px]"
              />
            </div>

            <div className="h-full space-y-60 overflow-y-scroll scrollbar-hide">
              {/* sidebar menu buttons */}
              <nav className="mx-[30px] mt-[53px]">
                <ul>
                  {menuItems.map(({ href, title, icon }) => (
                    <div key={title}>
                      <li className="mx-[15px] mb-[15px]">
                        <Link href={href}>
                          <button
                            className={`flex flex-shrink-0 items-center justify-center space-x-3 text-[14px] text-white hover:text-[#00D2CB] ${router.asPath === href && 'text-[#00D2CB]'
                              }`}
                          >
                            {icon}
                            <p className="md:text-sm">{title}</p>
                          </button>
                        </Link>
                      </li>
                    </div>
                  ))}
                </ul>
              </nav>

              <div>
                {/* sidebar social buttons */}
                <div className="space-y-[15px]">
                  <div>
                    <a href={"https://facebook.com"} target="_blank" rel="noopener noreferrer">
                      <button className="mx-[27px] flex h-[36.58px] w-[149px] items-center justify-start space-x-[21px] bg-[#282246] text-white hover:text-[#00D2CB]">
                        <MdFacebook className="ml-[15px] h-[20px] w-[20px]" />
                        <p>Facebook</p>
                      </button>
                    </a>
                  </div>

                  <div>
                    <a href={"https://twitter.com"} target="_blank" rel="noopener noreferrer">
                      <button className="mx-[27px] flex h-[36.58px] w-[149px] items-center justify-start space-x-[21px] bg-[#282246] text-white hover:text-[#00D2CB]">
                        <SiTwitter className="ml-[15px] h-[20px]  w-[20px]" />
                        <p>Twitter</p>
                      </button>
                    </a>
                  </div>

                </div>

                {/* credit section */}
                <div className="mx-[3px] space-y-[9px] text-center text-[12px] text-[#666666] pt-10">
                  <p>© 2021 — Produced by Derana Macroentertainment (Pvt) Ltd.</p>
                  <p>All rights Reserved.</p>
                </div>
                <div className="h-[180px]"></div>
              </div>
            </div>
          </aside>
        </div>

        {/* mobile view */}
        <div className='inline md:hidden'>
          <aside className={sideBar ? "inline h-screen w-[203px] flex-shrink-0 bg-[#1B1730]" : "hidden h-screen w-[203px] flex-shrink-0 bg-[#1B1730]"}>
            {/* sidebar-logo */}
            <div className="mx-[18px] mt-[25px]">
              <img
                src="/assets/sidebar-logo.svg"
                alt="logo"
                className="h-[47px] w-[166px]"
              />
            </div>

            <div className="h-full space-y-60 overflow-y-scroll scrollbar-hide">
              {/* sidebar menu buttons */}
              <nav className="mx-[30px] mt-[53px]">
                <ul>
                  {menuItems.map(({ href, title, icon }) => (
                    <div key={title}>
                      <li className="mx-[15px] mb-[15px]">
                        <Link href={href}>
                          <button
                            className={`flex flex-shrink-0 items-center justify-center space-x-3 text-[14px] text-white hover:text-[#00D2CB] ${router.asPath === href && 'text-[#00D2CB]'
                              }`}
                          >
                            {icon}
                            <p className="md:text-sm">{title}</p>
                          </button>
                        </Link>
                      </li>
                    </div>
                  ))}
                </ul>
              </nav>

              <div>
                {/* sidebar social buttons */}
                <div className="space-y-[15px]">
                  <a href={"https://facebook.com"} target="_blank" rel="noopener noreferrer">
                    <button className="mx-[27px] flex h-[36.58px] w-[149px] items-center justify-start space-x-[21px] bg-[#282246] text-white hover:text-[#00D2CB]">
                      <MdFacebook className="ml-[15px] h-[20px] w-[20px]" />
                      <p>Facebook</p>
                    </button>
                  </a>

                  <a href={"https://twitter.com"} target="_blank" rel="noopener noreferrer">
                    <button className="mx-[27px] flex h-[36.58px] w-[149px] items-center justify-start space-x-[21px] bg-[#282246] text-white hover:text-[#00D2CB]">
                      <SiTwitter className="ml-[15px] h-[20px]  w-[20px]" />
                      <p>Twitter</p>
                    </button>
                  </a>
                </div>

                {/* credit section */}
                <div className="mx-[3px] space-y-[9px] text-center text-[12px] text-[#666666] mt-5">
                  <p>© 2021 — Produced by Derana Macroentertainment (Pvt) Ltd.</p>
                  <p>All rights Reserved.</p>
                </div>
                <div className="h-[180px]"></div>
              </div>
            </div>
          </aside>
          {/* backdrop */}
          <div className={sideBar ? 'absolute top-0 bottom-0 left-[203px] right-0 bg-slate-900 opacity-60' : 'hidden'} onClick={toggleSidebar} ></div>

        </div>


        {/* main-center */}
        <main className="h-screen max-w-[1800px] flex-grow items-center justify-center">
          <header className="sticky top-0 mx-[60px] flex h-[60px] items-center space-x-5 relative">
            <div className="inline md:hidden h-[15px] text-white">
              <MdOutlineSort onClick={toggleSidebar} />
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="hidden lg:inline-flex items-center justify-center space-x-3">
                <Link href={'/'}>
                  <button
                    className={`flex items-center space-x-1 text-white hover:text-[#00D2CB] ${router.asPath === '/' && 'text-[#00D2CB]'
                      }`}
                  >
                    <AiFillHome className="h-[15px] w-[15px]" />
                    <ChevronDoubleRightIcon className="h-[15px] w-[15px]" />
                  </button>
                </Link>
                {menuItems.map(({ href, title, icon }) =>
                  href === '/' ? (
                    <div key={title}></div>
                  ) : href === router.asPath ? (
                    <li className="mx-0" key={title}>
                      <Link href={href}>
                        <button
                          className={`flex items-center justify-center space-x-1 text-[14px] text-white hover:text-[#00D2CB] ${router.asPath === href && 'text-[#00D2CB]'
                            }`}
                        >
                          <p>{title}</p>
                          <ChevronDoubleRightIcon className="h-[15px] w-[15px]" />
                        </button>
                      </Link>
                    </li>
                  ) : (
                    <></>
                  )
                )}
              </div>

              {/* search bar */}
              <div className="hidden md:hidden lg:inline h-[35px] w-[440px]">
                <TopNavigationSearchBar data={SearchData} className={"absolute top-0"}/>
              </div>
            </div>
          </header>
          {children}
        </main>
      </div>
      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  )
}
