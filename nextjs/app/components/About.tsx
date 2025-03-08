"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AboutMe() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const skillsRef = useRef(null);
  const imageRef = useRef(null);
  
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Main heading animation
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
    
    // Text paragraphs animation
    gsap.fromTo(textRef.current.children,
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
    
    // Skills items animation
    gsap.fromTo(skillsRef.current.children,
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
    
    // Image animation
    gsap.fromTo(imageRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        }
      }
    );
    
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  const skills = [
    "JavaScript", "React.js", "Next.js", "Node.js", 
    "Tailwind CSS", "GSAP", "TypeScript", "UI/UX Design"
  ];
  
  return (
    <section ref={sectionRef} className="min-h-screen bg-slate-950 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold text-white mb-12">
          À propos de <span className="text-indigo-400">moi</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column - Text content */}
          <div>
            <div ref={textRef} className="space-y-6 text-lg">
              <p className="text-slate-300">
                Passionné par le développement web depuis plus de 5 ans, je combine expertise technique et créativité pour donner vie à des interfaces innovantes et performantes.
              </p>
              
              <p className="text-slate-400">
                Mon approche combine rigueur technique et sens du détail pour créer des expériences digitales qui se démarquent. Je suis constamment à l'affût des nouvelles technologies et des bonnes pratiques.
              </p>
              
              <p className="text-slate-400">
                Chaque projet est une nouvelle opportunité explorer des solutions créatives et d'améliorer l'expérience utilisateur à travers un code propre et optimisé.
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
          
          {/* Right column - Image */}
          <div className="flex items-center justify-center">
            <div ref={imageRef} className="relative w-full max-w-md">
              <div className="w-full h-[400px] relative overflow-hidden rounded-md border border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <span className="text-slate-500">Votre photo ici</span>
                
                {/* Minimalist corner accent */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-indigo-500/50"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-indigo-500/50"></div>
              </div>
            </div>        
          </div>
        </div>
      </div>
    </section>
  );
}
