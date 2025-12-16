import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Rivera",
    role: "CEO",
    company: "MarketingFlow Agency",
    text: "Nuestra agencia estaba ahogada en tareas manuales. La implementación de n8n que hicieron nos liberó 25 horas a la semana. Literalmente nos devolvió la vida.",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    name: "Ana Martínez",
    role: "Directora de Operaciones",
    company: "EcomGrowth",
    text: "Profesional, rápido y extremadamente capaz. El sistema de facturación automática ha funcionado sin fallos desde el día 1. 100% recomendado.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    name: "David Chen",
    role: "Founder",
    company: "SaaS Start",
    text: "La auditoría inicial nos abrió los ojos. No sabíamos cuánto dinero perdíamos en procesos ineficientes. El ROI fue positivo en el primer mes.",
    image: "https://picsum.photos/100/100?random=3"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Lo que dicen mis clientes" 
          subtitle="Confianza" 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-900/50 p-8 xl:p-10 rounded-2xl border border-white/5 relative hover:border-brand-cyan/20 transition-all duration-300 flex flex-col justify-between"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 text-white/5" />
              
              <div className="mb-6">
                <p className="text-gray-300 text-base xl:text-lg leading-relaxed italic">
                    "{item.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full border border-brand-cyan/30 grayscale hover:grayscale-0 transition-all"
                />
                <div>
                  <h4 className="text-white font-bold text-base">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.role}, {item.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};