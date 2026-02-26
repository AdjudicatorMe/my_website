import React, { useState } from 'react'

interface NavbarProps {
  logo?: string
  brandName?: string
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="sticky top-4 z-50 px-4">
      <nav className="max-w-6xl mx-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16 relative">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
              >
                Home
              </a>
              <a
                href="#resume"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Resume
              </a>
              <a
                href="#features"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Skills
              </a>
              <a
                href="#about"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button - Positioned absolutely on the right */}
          <div className="absolute right-4 md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }}
                className="text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-lg text-base font-medium cursor-pointer"
              >
                Home
              </a>
              <a
                href="#resume"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-lg text-base font-medium"
              >
                Resume
              </a>
              <a
                href="#features"
                className="text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-lg text-base font-medium"
              >
                Skills
              </a>
              <a
                href="#about"
                className="text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-lg text-base font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-lg text-base font-medium"
              >
                Contact
              </a>
              
            </div>
          </div>
        )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
