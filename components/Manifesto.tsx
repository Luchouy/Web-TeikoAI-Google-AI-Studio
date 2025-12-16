import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { SpotlightCard } from './ui/SpotlightCard';
import { BrainCircuit, Settings2, ShieldCheck, Handshake } from 'lucide-react';

const manifestoItems = [
  {
    icon: BrainCircuit,
    title: "Cómo pensamos la IA",
    content: (
      <>
        <p className="mb-4">
          La inteligencia artificial <strong className="text-white">no es el punto de partida</strong>. 
          El punto de partida siempre es el negocio y las personas que trabajan en él.
        </p>
        <p>
          La utilizamos cuando ayuda a ordenar el día a día, a reducir fricciones operativas y a liberar tiempo. 
          Si una herramienta no simplifica el trabajo real, <span className="text-white">no tiene sentido implementarla.</span>
        </p>
      </>
    )
  },
  {
    icon: Settings2,
    title: "Nuestra forma de trabajar",
    content: (
      <>
        <p className="mb-4">
          Antes de construir, nos tomamos el tiempo de <strong className="text-white">entender cómo funciona el negocio hoy</strong>. 
          Analizamos qué tareas son manuales, dónde se pierde tiempo y qué procesos dependen de las mismas personas.
        </p>
        <p>
          Diseñamos sistemas que se integran a la forma de trabajar existente. 
          El objetivo es que <span className="text-white">la tecnología se adapte al negocio</span> y no al revés.
        </p>
      </>
    )
  },
  {
    icon: ShieldCheck,
    title: "En qué creemos",
    content: (
      <>
        <p className="mb-4">
          Creemos en soluciones pensadas para el uso cotidiano y sostenidas en el tiempo. 
          Sistemas que puedan ser <strong className="text-white">comprendidos, adoptados y mantenidos</strong> por los equipos.
        </p>
        <p>
          Priorizamos la estabilidad operativa y la continuidad del servicio sobre la complejidad innecesaria.
        </p>
      </>
    )
  },
  {
    icon: Handshake,
    title: "Qué puede esperar un cliente",
    content: (
      <>
        <p className="mb-4">
          Un proceso de trabajo claro, profesional y orientado a resultados. 
          Un <strong className="text-white">análisis honesto</strong> del contexto del negocio y de las oportunidades reales de automatización.
        </p>
        <p>
          La implementación se construye en conjunto, a partir del entendimiento del negocio y del intercambio continuo, para que la solución se adapte de forma natural a las necesidades operativas y a la evolución del negocio.
        </p>
      </>
    )
  }
];

export const Manifesto: React.FC = () => {
  return (
    // Added pt-32 md:pt-40 to account for fixed navbar on separate page
    <section className="py-20 pt-32 md:py-32 md:pt-40 bg-brand-dark relative overflow-hidden min-h-screen">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Visión & Enfoque" 
          subtitle="ADN TeikoAI" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {manifestoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <SpotlightCard className="h-full bg-neutral-900/30 border-white/5 group hover:border-brand-cyan/20">
                <div className="p-8 md:p-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-black transition-colors duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  
                  <div className="text-gray-400 leading-relaxed text-base md:text-lg flex-grow">
                    {item.content}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};