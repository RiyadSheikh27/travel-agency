import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const AllNeogsNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-yellow-50 to-orange-200 shadow-lg mb-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20 xl:h-22 2xl:h-24">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block text-4xl font-extrabold p-1 border-black border-2">
              ভরসা
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center">
            <ul className="flex space-x-6 xl:space-x-8 2xl:space-x-10 text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-gray-800">
              <li>
                <a
                  href="/"
                  className="hover:text-orange-600 transition-colors duration-300 hover:scale-105 transform"
                >
                  হোম
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-orange-600 hover:text-orange-700 focus:outline-none focus:text-orange-700 transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <FaTimes className="h-6 w-6 sm:h-7 sm:w-7" />
              ) : (
                <FaBars className="h-6 w-6 sm:h-7 sm:w-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setMenuOpen(false)}
            ></div>

            {/* Menu Panel */}
            <div className="fixed top-16 sm:top-18 right-4 sm:right-6 bg-gradient-to-br from-cyan-400 to-cyan-950 rounded-xl shadow-2xl z-50 min-w-64 sm:min-w-72">
              <div className="px-6 py-6 sm:px-8 sm:py-8">
                <ul className="space-y-4 sm:space-y-6">
                  <li>
                    <a
                      href="/"
                      onClick={() => setMenuOpen(false)}
                      className="block text-white font-semibold text-base sm:text-lg hover:text-yellow-300 transition-colors duration-300 py-2"
                    >
                      হোম
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default AllNeogsNavbar
