export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
          <a href="/home" className="font-bold text-2xl">Portfolio</a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="/contact" className="hover:text-gray-300 transition duration-300 font-medium">
                Contact
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-gray-300 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, hidden by default */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/projets" className="block px-3 py-2 hover:bg-blue-800 rounded-md">Projets</a>
          <a href="/competences" className="block px-3 py-2 hover:bg-blue-800 rounded-md">Compétences</a>
          <a href="/contact" className="block px-3 py-2 hover:bg-blue-800 rounded-md">Contact</a>
        </div>
      </div>
    </nav>
  );
}
