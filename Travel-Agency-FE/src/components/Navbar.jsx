import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className='fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-yellow-50 to-orange-200 shadow-lg'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16'>
                <div className='flex justify-between items-center h-16 sm:h-18 lg:h-20 xl:h-22 2xl:h-24'>

                    {/* Company Logo */}
                    <div className='flex-shrink-0'>
                        <a href="#hero" className='block text-4xl font-extrabold p-1 border-black border-2'>
                            {/* <img 
                                className='h-10 sm:h-12 lg:h-14 xl:h-16 2xl:h-18 w-auto object-contain' 
                                src="https://via.placeholder.com/200x60/f59e0b/ffffff?text=Travel+Logo" 
                                alt="Travel Agency Logo" 
                            /> */}
                            ভরসা
                        </a>
                    </div>

                    {/* Desktop Navigation Menu */}
                    <div className='hidden lg:flex lg:items-center lg:space-x-6 xl:space-x-8 2xl:space-x-10'>
                        <ul className='flex space-x-6 xl:space-x-8 2xl:space-x-10 text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-gray-800'>
                            <li>
                                <a
                                    href="#hero"
                                    className='hover:text-orange-600 transition-colors duration-300 hover:scale-105 transform'
                                >
                                    হোম
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#neog"
                                    className='hover:text-orange-600 transition-colors duration-300 hover:scale-105 transform'
                                >
                                    নিয়োগ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#amadersomporke"
                                    className='hover:text-orange-600 transition-colors duration-300 hover:scale-105 transform'
                                >
                                    আমাদের সম্পর্কে
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className='hover:text-orange-600 transition-colors duration-300 hover:scale-105 transform'
                                >
                                    যোগাযোগ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Desktop CTA Button */}
                    <div className='hidden lg:flex lg:items-center'>
                        <a
                            href="https://wa.me/8801626382361"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='bg-gradient-to-br from-yellow-400 to-orange-600 hover:from-yellow-500 hover:to-orange-700 text-white font-bold px-4 py-2 lg:px-6 lg:py-3 xl:px-8 xl:py-4 2xl:px-10 2xl:py-5 rounded-lg text-sm lg:text-base xl:text-lg 2xl:text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                        >
                            টিকেট কিনুন
                        </a>
                    </div>


                    {/* Mobile Menu Button */}
                    <div className='lg:hidden'>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className='text-orange-600 hover:text-orange-700 focus:outline-none focus:text-orange-700 transition-colors duration-300 p-2'
                            aria-label='Toggle menu'
                        >
                            {menuOpen ?
                                <FaTimes className='h-6 w-6 sm:h-7 sm:w-7' /> :
                                <FaBars className='h-6 w-6 sm:h-7 sm:w-7' />
                            }
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {menuOpen && (
                    <div className='lg:hidden'>
                        {/* Backdrop */}
                        <div
                            className='fixed inset-0 bg-black bg-opacity-50 z-40'
                            onClick={() => setMenuOpen(false)}
                        ></div>

                        {/* Mobile Menu Panel */}
                        <div className='fixed top-16 sm:top-18 right-4 sm:right-6 bg-gradient-to-br from-cyan-400 to-cyan-950 rounded-xl shadow-2xl z-50 min-w-64 sm:min-w-72'>
                            <div className='px-6 py-6 sm:px-8 sm:py-8'>
                                <ul className='space-y-4 sm:space-y-6'>
                                    <li>
                                        <a
                                            href="#hero"
                                            onClick={() => setMenuOpen(false)}
                                            className='block text-white font-semibold text-base sm:text-lg hover:text-yellow-300 transition-colors duration-300 py-2'
                                        >
                                            হোম
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#neog"
                                            onClick={() => setMenuOpen(false)}
                                            className='block text-white font-semibold text-base sm:text-lg hover:text-yellow-300 transition-colors duration-300 py-2'
                                        >
                                            নিয়োগ
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#amadersomporke"
                                            onClick={() => setMenuOpen(false)}
                                            className='block text-white font-semibold text-base sm:text-lg hover:text-yellow-300 transition-colors duration-300 py-2'
                                        >
                                            আমাদের সম্পর্কে
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#contact"
                                            onClick={() => setMenuOpen(false)}
                                            className='block text-white font-semibold text-base sm:text-lg hover:text-yellow-300 transition-colors duration-300 py-2'
                                        >
                                            যোগাযোগ
                                        </a>
                                    </li>
                                    <li className='pt-4 sm:pt-6 border-t border-cyan-300'>
                                        <button
                                            onClick={() => setMenuOpen(false)}
                                            className='w-full bg-gradient-to-br from-yellow-400 to-orange-600 hover:from-yellow-500 hover:to-orange-700 text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl'
                                        >
                                            টিকেট কিনুন
                                        </button>
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

export default Navbar