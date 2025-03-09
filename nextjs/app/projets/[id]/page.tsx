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
    <div className="container mx-auto px-4 py-16">
      {/* Bouton de retour */}
      <Link
        href="/home"
        className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8"
      >
        <ArrowLeft size={16} />
        Retour aux projets
      </Link>
      
      {/* Titre du projet */}
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Image du projet */}
      <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Description complète */}
      <div className="prose max-w-none dark:prose-invert mb-8">
        <ReactMarkdown>{project.fullDescription}</ReactMarkdown>
      </div>
      
      {/* Boutons */}
      <div className="flex flex-wrap gap-4 mt-8">
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Voir la démo
          </a>
        )}
        
        
      </div>
    </div>
  );
};

export default ProjectPage;
