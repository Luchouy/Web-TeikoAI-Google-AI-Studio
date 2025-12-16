import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { CheckCircle2 } from 'lucide-react';

export const Booking: React.FC = () => {
  return (
    <section id="booking" className="py-16 md:py-24 relative overflow-hidden bg-brand-dark">
      
      {/* --- HIGH VISIBILITY SYSTEM CORE BACKGROUND (OPTIMIZED) --- */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
        
        {/* 1. Technical Grid Background - Static */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px] opacity-20 md:opacity-30" />
        
        {/* Container to scale down effects on mobile */}
        <div className="scale-50 md:scale-100 relative flex items-center justify-center">
            {/* 2. The Core Energy */}
            <div className="absolute w-[400px] h-[400px] bg-brand-cyan/20 rounded-full blur-[80px] animate-pulse-slow will-change-transform" />

            {/* 3. Inner Reactor Ring */}
            <div className="absolute w-[300px] h-[300px] rounded-full border border-brand-cyan/20 border-t-brand-cyan/80 shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-spin-slower will-change-transform" />

            {/* 4. Middle Orbital Ring */}
            <div className="absolute w-[500px] h-[500px] rounded-full border border-dashed border-white/10 animate-spin-reverse-slower will-change-transform" />

            {/* 5. Outer Expansion Ring */}
            <div className="absolute w-[700px] h-[700px] rounded-full border border-white/5 border-b-brand-cyan/30 animate-spin-super-slow will-change-transform">
                {/* Satellite Node */}
                <div className="absolute top-1/2 -right-1 w-3 h-3 bg-brand-cyan rounded-full shadow-[0_0_15px_#3B82F6]" />
            </div>
        </div>

        {/* 6. Radial Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#020617_80%)]" />
      </div>

      {/* --- CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left: Copy */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <SectionHeading 
              title="¿Listo para empezar?" 
              subtitle="Agenda una Reunión" 
              align="left"
            />
            {/* Force left alignment override for responsive headings in this specific block if needed, but SectionHeading handles it via props. 
                However, for mobile we might want centered text if SectionHeading prop is 'left'.
                Actually, keeping it left aligned is fine for the design pattern, but the paragraph below needs to match.
            */}
            
            <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed text-left">
              Reserva una llamada de 30 minutos. Sin compromiso. Te mostraré cómo funciona el sistema en vivo y evaluaremos si es viable para tu negocio.
            </p>

            <div className="space-y-4 md:space-y-6 mb-8 text-left">
              {[
                "Demostración del sistema en tiempo real.",
                "Análisis rápido de tu proceso actual.",
                "Presupuesto y roadmap de implementación."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-cyan mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-base md:text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Clean Calendar Embed */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-neutral-900/60 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 shadow-2xl h-[550px] md:h-[500px] relative group mx-auto max-w-lg lg:max-w-none"
          >
            {/* Subtle border glow on hover */}
            <div className="absolute inset-0 border border-brand-cyan/0 group-hover:border-brand-cyan/30 transition-colors duration-500 rounded-xl pointer-events-none z-20" />
            
            <iframe 
              src="https://cal.com/lucianodemarco/30min?embed=true&ui=dark" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              title="Reservar llamada"
              loading="lazy"
              className="w-full h-full relative z-10"
            ></iframe>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};