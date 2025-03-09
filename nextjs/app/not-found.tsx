// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 font-mono">
      <h1 className="text-6xl font-bold text-blue-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-blue-700 mb-6">Page introuvable</h2>
      <p className="text-gray-200 mb-8 max-w-lg">
        Désolé, la page que vous recherchez n existe pas ou a été déplacée.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors"
      >
        Retour à l accueil
      </Link>
    </div>
  );
}
