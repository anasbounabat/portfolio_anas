import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-900 text-white py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/home" className="font-bold text-2xl">Portfolio</Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/contact" className="hover:text-gray-300 transition duration-300 font-medium">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              className="text-white hover:text-gray-300 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu mobile */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/contact" className="block px-3 py-2 hover:bg-blue-800 rounded-md">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
