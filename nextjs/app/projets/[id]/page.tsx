// app/projets/[id]/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProjectById } from '@/app/data/projects';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

// Créer une interface pour le type de projet
interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
}

const ProjectPage: React.FC = () => {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (params?.id) {
      const projectId = parseInt(params.id as string);
      const projectData = getProjectById(projectId);
      
      setProject(projectData);
      setLoading(false);
    }
  }, [params]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Projet non trouvé</h1>
        <p className="mb-6">Désolé, le projet que vous recherchez n existe pas.</p>
        <Link
          href="/home"
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          <ArrowLeft size={16} />
          Retour aux projets
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Bouton de retour */}
        <Link
          href="/home"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline mb-6 sm:mb-8 text-sm sm:text-base transition-colors"
        >
          <ArrowLeft size={16} />
          Retour aux projets
        </Link>
        
        {/* Layout principal */}
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Titre du projet */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
            {project.title}
          </h1>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium rounded-full border border-blue-200 hover:bg-blue-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Image du projet */}
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 896px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          {/* Description complète */}
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 break-words overflow-hidden">
            <ReactMarkdown>{project.fullDescription}</ReactMarkdown>
          </div>
          
          {/* Boutons d'action */}
          <div className="flex flex-wrap gap-4 mt-8">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
              >
                🌐 Voir la démo
              </a>
            )}
            
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium border border-gray-300 hover:border-gray-400"
              >
                💻 Code source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
