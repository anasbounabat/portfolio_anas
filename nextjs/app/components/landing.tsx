"use client";

import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 text-white overflow-hidden relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 h-screen flex flex-col justify-between relative z-10">
        
        {/* Top section with "DÉVELOPPEUR" animation */}
        <div className="pt-20">
          <motion.div 
            initial={{ x: -1200 }}
            animate={{ x: 0 }}
            transition={{ 
              duration: 2, 
              delay: 0.3,
              stiffness: 100
            }}
            className="text-left"
          >
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter drop-shadow-lg">
              DÉVELOPPEUR
            </h1>
          </motion.div>
        </div>
        
        {/* Center section for additional content if needed */}
        <div className="flex flex-col items-center justify-center my-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.3, duration: 0.8 }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 max-w-md mx-auto"
          >
            <p className="text-sm md:text-base text-white/90 leading-relaxed text-center">
              Je crée des expériences web innovantes et intuitives 
              avec un focus sur la performance et l'élégance du design.
            </p>
          </motion.div>
        </div>
        
        {/* Bottom section with "WEB" animation */}
        <div className="pb-20 flex justify-end">
          <motion.div 
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ 
              duration: 2, 
              delay: 0.3, // Même délai que "DÉVELOPPEUR"
              stiffness: 100
            }}
            className="text-right"
          >
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter drop-shadow-lg">
              WEB
            </h1>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute top-20 -right-20 w-80 h-80 bg-pink-500 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-purple-500 rounded-full filter blur-2xl opacity-20"></div>
      
      {/* Grid overlay for texture */}
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:30px_30px] z-[1]"></div>
    </div>
  );
}
