"use client";

import React from 'react';
import Landing from '@/app/components/landing';
import { Timeline } from '@/app/components/timeline'; 

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


const HomePage: React.FC = () => {
  return (
    <main>
      <Landing />
      <About />
      <Timeline data={timelineData} />
    </main>
  );
};

export default HomePage;
