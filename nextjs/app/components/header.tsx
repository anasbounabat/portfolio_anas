export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white p-6 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} - Tous droits réservés</p>
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li>
              <a href="/contact" className="hover:text-gray-400">
                Projet
              </a>
            </li>
            <li>
              <a href="/home" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/votre-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
  