// app/components/Card.tsx
import React, { useState, useContext, createContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Créer un contexte pour partager l'état de survol entre les cartes
const HoverContext = createContext({
  hoveredId: null as number | null,
  setHoveredId: (() => {}) as React.Dispatch<React.SetStateAction<number | null>>
});

// Wrapper pour gérer l'état de survol de toutes les cartes
export const CardsProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  return (
    <HoverContext.Provider value={{ hoveredId, setHoveredId }}>
      {children}
    </HoverContext.Provider>
  );
};

interface CardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  demoLink?: string;
  codeLink?: string;
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  imageUrl,
  tags = [],
}) => {
  const { hoveredId, setHoveredId } = useContext(HoverContext);
  const isHovered = hoveredId === id;
  const shouldBlur = hoveredId !== null && !isHovered;
  
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden relative transition-all duration-500
                  ${shouldBlur ? 'scale-95 blur-[2px] opacity-70 z-0' : 'scale-100 blur-0 opacity-100 z-10'}
                  hover:scale-105 hover:z-20 hover:shadow-2xl`}
      onMouseEnter={() => setHoveredId(id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      {/* Effet de bordure 3D */}
      <div className="absolute inset-0 rounded-xl border border-blue-200 transform translate-x-1 translate-y-1 -z-10"></div>
      
      <Link href={`/projets/${id}`}>
        <div className="relative h-64 w-full cursor-pointer overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-800/30 to-transparent opacity-60"></div>
        </div>
      </Link>
      
      <div className="p-5 relative z-10">
        <Link href={`/projets/${id}`}>
          <h3 className="text-xl font-bold text-blue-700 hover:text-blue-500 transition-colors cursor-pointer drop-shadow-md">{title}</h3>
        </Link>
        
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 my-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded shadow-sm transform hover:scale-105 transition-transform"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <p className="text-blue-700/90 line-clamp-3 mb-6">{description}</p>
        
        {/* Boutons avec margins */}
        <div className="flex space-x-3 my-4">
          <Link 
            href={`/projets/${id}`}
            className="px-5 py-2.5 bg-blue-600 text-white rounded-md transition-all 
                      hover:bg-blue-500 focus:outline-none focus:ring-2 
                      focus:ring-blue-500 focus:ring-offset-2 text-sm font-medium 
                      shadow-lg hover:shadow-blue-500/50 transform 
                      hover:translate-y-[-2px] active:translate-y-0 active:shadow-inner"
          >
            Voir détails
          </Link>
        </div>
      </div>
    </div>
  );
};

// Composant pour afficher la grille de cartes
export const ProjectsGrid: React.FC<{projects: CardProps[]}> = ({ projects }) => {
  return (
    <CardsProvider>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative bg-blue-800 p-6 rounded-xl">
        {projects.map(project => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    </CardsProvider>
  );
};

export default Card;
