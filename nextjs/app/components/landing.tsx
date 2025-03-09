"use client";

import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className=" font-mono min-h-screen bg-gradient-to-br from-blue-700 via-blue-800 to-blue-700 text-white overflow-hidden relative">
  
      <div className="absolute inset-0 bg-black/20 z-0"></div>
    
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
            <p className="text-xl  md:text-base text-white/90 leading-relaxed text-center">
              ANAS BOUNABAT
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
    
      
      {/* Grid overlay for texture */}
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:30px_30px] z-[1]"></div>
    </div>
  );
}
