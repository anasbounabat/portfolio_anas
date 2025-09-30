// app/home/page.tsx
"use client";

import React from 'react';
import Landing from '@/app/components/landing';
import { Timeline } from '@/app/components/timeline'; 
import About from '@/app/components/About';
import Card from '@/app/components/Card';
import { projects } from '@/app/data/projects';

const timelineData = [
  {
    title: "2019-2022",
    content: (
      <div className="prose dark:prose-invert">
        <p className="text-xl font-bold">
            Lycée Jean Zay</p>
        <p>Baccalauréat (Mathématiques et Physique-Chimie)</p>
      </div>
    )
  }, 
  {
    title: "2022-2023",
    content: (
      <div className="prose dark:prose-invert">
        <p className="text-xl font-bold">
            Université Sorbonne Paris Nord </p>
        <p>Licence 1 en SPI</p>
      </div>
    )
  }, 
  {
    title: "2023-NOW",
    content: (
      <div className="prose dark:prose-invert">
        <p className="text-xl font-bold">
            IIM Digital School
        </p>
        <p>Bachelor en Coding & Digital Innovation</p>
      </div>
    )
  }, 
  {
  title: "Oct-dec 2024",
  content: (
    <div className="prose dark:prose-invert">
      <p className="text-xl font-semibold">Bourse aux Projets : Développeur Web Front-end</p>
      <ul className="list-disc pl-5">
        <li>Développement de l'interface Front-end en React avec TailwindCSS</li>
        <li>Collaboration avec l'équipe X-UI pour une interface immersive via Figma</li>
        <li>Gestion du projet avec méthodologies Agile via Trello</li>
      </ul>
    </div>
  )
},

  {
  title: "Jan-mar 2025",
  content: (
    <div className="prose dark:prose-invert">
      <p className="text-xl  font-semibold">Bourse aux Projets : Chef de projet</p>
      <ul className="list-disc pl-5">
        <li>Application des méthodologies Agile et Design Thinking</li>
        <li>Élaboration des cahiers des charges et rédaction des comptes rendus </li>
        <li>Management d'une équipe pluridisciplinaire de 10 personnes</li>
      </ul>
    </div>
  )
},
 {
  title: "Avr-Juin 2025",
  content: (
    <div className="prose dark:prose-invert">
      <p className="text-xl  font-semibold">Stagiaire Dev Full-Stack InnovQube</p>
      <ul className="list-disc pl-5">
        <li>Développement du backend avec Laravel (Eloquent, API Rest, Livewire, Filament)</li>
        <li>Intégration des composants front avec Vue.js et optimisation des performances</li>
        <li>Conception d'APIs Rest et modélisation des données</li>
      </ul>
    </div>
  )
},
];

const HomePage: React.FC = () => {
  return (
    <main>
      <Landing />
      <About />
      
      {/* Section Timeline */}
      <section id="education" className="py-16 bg-blue-900">
        <div className="container mx-auto px-4">
          <Timeline data={timelineData} />
        </div>
      </section>
      
      <section id="projects" className="py-16 bg-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">Mes Projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card 
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
                codeLink={project.codeLink}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
