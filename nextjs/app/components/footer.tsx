export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-6 mt-0"> {/* Changé mt-10 à mt-0 */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} - Tous droits réservés</p>
        <ul className="flex space-x-6 mt-4 md:mt-0">
          <li>
            <a href="https://github.com/anasbounabat" className="hover:text-blue-300 transition-colors">
              GitHub
            </a>
          </li>

          <li>
            <a href="/contact" className="hover:text-blue-300 transition-colors">
              Contact
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/votre-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
