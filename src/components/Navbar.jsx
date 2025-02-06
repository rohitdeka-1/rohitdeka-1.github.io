"use client"

import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8">
      <div className="navbar font-poppins h-[70px] bg-black rounded-b-2xl shadow-xl">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl sm:text-2xl text-white">Rohit Deka</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-ghost lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            {isMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="#about" className="hover:text-[#20a3cf]">About</a>
                </li>
                <li>
                  <a className="hover:text-[#20a3cf]">Projects</a>
                </li>
                <li>
                  <a className="hover:text-[#20a3cf]">Contact Me</a>
                </li>
              </ul>
            )}
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg sm:text-xl font-bold text-white">
              <li>
                <a className="hover:text-[#20a3cf] " href="#about">About</a>
              </li>
              <li>
                <a className="hover:text-[#20a3cf]">Projects</a>
              </li>
              <li>
                <a className="hover:text-[#20a3cf]">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

