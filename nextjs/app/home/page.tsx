"use client";

import React from 'react';
import Landing from '@/app/components/landing';
import { Timeline } from '@/app/components/timeline'; 
import { StickyScroll } from '@/app/components/sticky-scroll-reaveal';
import About from '@/app/components/About';

const timelineData = [
  {
    title: "2020",
    content: (
      <div className="prose dark:prose-invert">
        <p>ai commencé mon parcours en développement web.</p>
      </div>
    )
  },
  {
    title: "2021",
    content: (
      <div className="prose dark:prose-invert">
        <p>ai approfondi mes compétences en React et Next.js.</p>
      </div>
    )
  },
  {
    title: "2022",
    content: (
      <div className="prose dark:prose-invert">
        <p>ai travaillé sur plusieurs projets professionnels.</p>
      </div>
    )
  },
  {
    title: "2023",
    content: (
      <div className="prose dark:prose-invert">
        <p>ai développé des applications avec des animations avancées.</p>
      </div>
    )
  }
];

// Données pour le composant StickyScroll
const stickyContent = [
  {
    title: "Développement Web",
    description: "Je crée des sites web modernes avec les dernières technologies.",
    content: <div className="w-full h-full bg-white/10 flex items-center justify-center text-white">Frontend</div>
  },
  {
    title: "Design UI/UX",
    description: "Je conçois des interfaces utilisateur élégantes et fonctionnelles.",
    content: <div className="w-full h-full bg-white/10 flex items-center justify-center text-white">Design</div>
  },
  {
    title: "Animation & Interactivité",
    description: "J'intègre des animations fluides pour améliorer l'expérience utilisateur.",
    content: <div className="w-full h-full bg-white/10 flex items-center justify-center text-white">Animation</div>
  }
];

const HomePage: React.FC = () => {
  return (
    <main>
      <Landing />
      <About />
      <Timeline data={timelineData} />
      <StickyScroll content={stickyContent} />
    </main>
  );
};

export default HomePage;
