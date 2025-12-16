import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { PageData, PortfolioItem } from '../types';
import { ExternalLink, Check } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';

interface PortfolioProps {
  data: PageData['portfolio'];
  onItemClick?: (item: PortfolioItem) => void;
}

// 3D Tilt Wrapper for Spotlight Card
const TiltWrapper: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-200, 200], [5, -5]); // Subtle tilt
    const rotateY = useTransform(mouseX, [-200, 200], [-5, 5]);

    return (
        <motion.div
            style={{ perspective: 1000, rotateX, rotateY }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full cursor-pointer w-full md:max-w-md"
        >
            {children}
        </motion.div>
    );
}

const ProjectCard: React.FC<{ project: PortfolioItem }> = ({ project }) => {
  return (
    <SpotlightCard className="h-full bg-neutral-900/80 group overflow-hidden border border-white/5 hover:border-brand-cyan/40">
        <div className="absolute inset-0 bg-brand-cyan/5 blur-xl group-hover:bg-brand-cyan/10 transition-all duration-500 -z-10" />
        
        {/* Visual Overlay Container */}
        <div className="relative h-64 overflow-hidden border-b border-white/5 bg-brand-dark/50">
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-10" />
          
          {/* Render the custom visual component */}
          <div className="w-full h-full flex items-center justify-center relative z-0">
             {project.visual}
          </div>

          <div className="absolute bottom-4 left-4 z-20">
            <span className="px-3 py-1 text-xs font-semibold bg-brand-cyan text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] rounded-full border border-brand-cyan/20">
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-2 flex justify-between items-center group-hover:text-brand-cyan transition-colors">
            {project.title}
            <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-brand-cyan transition-colors" />
          </h3>
          <p className="text-gray-400 text-base mb-6 line-clamp-3 group-hover:text-gray-300 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs text-blue-200/60 bg-blue-900/10 border border-blue-500/20 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-white/5">
            <span className="text-brand-cyanGlow text-sm font-semibold flex items-center gap-2">
              <Check className="w-4 h-4 text-brand-cyan" />
              Impacto: {project.metrics}
            </span>
          </div>
        </div>
    </SpotlightCard>
  );
};

export const Portfolio: React.FC<PortfolioProps> = ({ data, onItemClick }) => {
  return (
    <section id="portfolio" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-cyan/10 blur-[100px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title={data.title} 
          subtitle={data.subtitle} 
        />

        {/* Changed from Grid to Flex to center the single item */}
        <div className="flex flex-wrap justify-center gap-8 xl:gap-12 perspective-1000">
          {data.items.map((project) => (
            <TiltWrapper key={project.id} onClick={() => onItemClick && onItemClick(project)}>
                <ProjectCard project={project} />
            </TiltWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};