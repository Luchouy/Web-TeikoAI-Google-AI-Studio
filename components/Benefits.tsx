import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { PageData } from '../types';
import { SpotlightCard } from './ui/SpotlightCard';

interface BenefitsProps {
  data: PageData['benefits'];
}

export const Benefits: React.FC<BenefitsProps> = ({ data }) => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title={data.title} 
          subtitle={data.subtitle} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 xl:gap-8">
          {data.items.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
                <SpotlightCard className="h-full bg-neutral-900/50 group hover:border-brand-cyan/30 transition-colors">
                    <div className="p-6 md:p-8 h-full flex flex-col">
                        
                        {/* Icon Container */}
                        <div className="mb-4 md:mb-6 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-300">
                            <benefit.icon className="w-6 h-6 md:w-7 md:h-7" />
                        </div>
                        
                        <h3 className="text-lg md:text-xl font-display font-bold text-white mb-2 md:mb-3 group-hover:text-brand-cyan transition-colors">
                            {benefit.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm leading-relaxed md:leading-7">
                            {benefit.description}
                        </p>
                    </div>
                </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};