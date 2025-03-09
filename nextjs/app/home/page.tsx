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
        <p>Lycée Jean Zay Baccalauréat (Mathématiques et Physique-Chimie)</p>
      </div>
    )
  },
  {
    title: "2022-2023",
    content: (
      <div className="prose dark:prose-invert">
        <p>Université Sorbonne Paris Nord Licence 1 en SPI</p>
      </div>
    )
  },
  {
    title: "2023-NOW",
    content: (
      <div className="prose dark:prose-invert">
        <p> IIM digital school Bachelor en coding & digital innovation</p>
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
