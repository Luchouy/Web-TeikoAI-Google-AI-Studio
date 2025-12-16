import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { PageData } from '../types';

interface ProcessProps {
  data: PageData['process'];
}

export const Process: React.FC<ProcessProps> = ({ data }) => {
  return (
    <section id="process" className="py-20 md:py-32 bg-brand-dark relative overflow-hidden perspective-1000">
      {/* Background Glow - Reduced on mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[400px] bg-brand-cyan/10 blur-[60px] md:blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title={data.title} 
          subtitle={data.subtitle} 
        />

        <div className="relative mt-12 md:mt-20">
          {/* Connector Line (Desktop) - Glowing 3D Tube */}
          <div className="hidden md:block absolute top-[52px] left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent z-0 shadow-[0_0_20px_#3B82F6]" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 xl:gap-12">
            {data.steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                className="relative z-10 group"
              >
                <div className="flex flex-col items-center text-center">
                  
                  {/* 3D Orb Icon Container */}
                  <motion.div 
                    whileHover={{ scale: 1.1, y: -10, rotate: 5 }}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-b from-brand-cyan/20 to-brand-dark border border-brand-cyan/40 flex items-center justify-center mb-6 md:mb-8 shadow-[0_0_30px_rgba(59,130,246,0.3)] relative backdrop-blur-xl bg-neutral-900"
                  >
                    <step.icon className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    
                    {/* Floating Number Badge */}
                    <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-7 h-7 md:w-8 md:h-8 rounded-full bg-brand-cyan flex items-center justify-center text-xs md:text-sm font-bold text-white shadow-[0_0_15px_#3B82F6] border-2 border-brand-dark">
                      {index + 1}
                    </div>
                  </motion.div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-brand-cyan transition-colors">{step.title}</h3>
                  <p className="text-sm md:text-base text-blue-200/60 max-w-[280px] leading-relaxed group-hover:text-blue-100 transition-colors mx-auto">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};