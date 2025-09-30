"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AboutMe() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (headingRef.current && sectionRef.current) {
      gsap.fromTo(headingRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }

    if (textRef.current && textRef.current.children.length > 0) {
      gsap.fromTo([...Array.from(textRef.current.children)],
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }
  
    if (skillsRef.current && skillsRef.current.children.length > 0) {
      gsap.fromTo([...Array.from(skillsRef.current.children)],
        { scale: 0.9, opacity: 0, y: 10 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  const skills = [
      "HTML", "CSS", "JavaScript","TypeScript","PHP",
      "Node.js", "MySQL","Symfony","Laravel",
      "React.js", "Next.js","Vue.js","N8N",
      "WordPress", "Tailwind CSS",
      "UI/UX Design"
  ];
  
  
  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-b from-blue-800 to-blue-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold text-indigo-200 mb-12 font-mono">
          À propos de <span className="text-indigo-400">moi</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div ref={textRef} className="space-y-6 text-lg">
           

<p className="text-slate-200">
  Je m&apos;appelle Anas Bounabat, j&apos;ai 21 ans et je suis étudiant à l&apos;IIM, me spécialisant dans le développement web full-stack. Mon objectif est de devenir un développeur capable de concevoir des applications modernes, performantes et intuitives.
</p>

<p className="text-slate-200">
  Mon approche allie rigueur technique, sens du détail et veille constante sur les nouvelles technologies et les meilleures pratiques du secteur.
</p>

<p className="text-slate-200">
  Chaque projet est une opportunité d explorer des solutions créatives, d améliorer l expérience utilisateur et de produire un code propre, optimisé et évolutif.
</p>

<p className="text-slate-200 ">
 Curieux et déterminé, j’aime relever des défis et collaborer sur des projets ambitieux. Que ce soit en front-end ou en back-end, je m’efforce de concevoir des solutions efficaces, intuitives et visuellement attractives.
</p>


            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-white mb-4">Compétences techniques</h3>
              <div ref={skillsRef} className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-indigo-900/40 border border-indigo-700/30 rounded-full text-sm text-indigo-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Suppression de la colonne d'image */}
          
        </div>
      </div>
    </section>
  );
}
