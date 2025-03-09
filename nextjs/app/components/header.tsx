// app/components/header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-2xl">
              Anas Bounabat
            </Link>
          </div>
         
          <nav className="flex space-x-6">
  
            <Link href="/contact" className="hover:text-gray-300 transition duration-300">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
