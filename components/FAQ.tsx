import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "¿Necesito conocimientos técnicos para usar el sistema?",
    answer: "Absolutamente no. Nuestra filosofía es 'Llave en mano'. Nosotros diseñamos, integramos y configuramos todo. Tú solo te preocupas por vender."
  },
  {
    question: "¿Cuánto tiempo tarda la implementación?",
    answer: "Depende de la complejidad, pero nuestro sprint estándar de implementación es de aproximadamente 4 semanas."
  },
  {
    question: "¿Qué canales puedo integrar además de WhatsApp?",
    answer: "Trabajamos con una plataforma de mensajería centralizada que permite unificar y gestionar todas las conversaciones en un solo lugar. Además de WhatsApp, es posible integrar canales como Instagram, Facebook Messenger, chat web y email, manteniendo el contexto y la trazabilidad de cada conversación."
  },
  {
    question: "¿El servicio incluye soporte y acompañamiento?",
    answer: "Sí. El servicio incluye horas mensuales de soporte, destinadas a ajustes puntuales, resolución de incidencias y consultas operativas relacionadas con el funcionamiento del sistema."
  },
  {
    question: "¿Qué pasa si la IA da una respuesta incorrecta?",
    answer: "Implementamos sistemas de 'Human-in-the-loop'. Si la IA detecta una consulta con baja confianza o un tema sensible, transfiere la conversación automáticamente a un humano de tu equipo, notificándole al instante."
  },
  {
    question: "¿Sirve para mi industria específica?",
    answer: "Nos especializamos en Real Estate, diseñando soluciones a medida que se adaptan a la operativa única de cada agencia. Si tienes otro tipo de negocio con alto volumen de consultas, podemos evaluar un desarrollo personalizado para tu caso."
  }
];

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-4 md:py-6 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className={`text-base md:text-lg font-medium transition-colors duration-300 pr-4 ${isOpen ? 'text-brand-cyan' : 'text-white group-hover:text-brand-cyan/80'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 p-1 rounded-full border transition-all duration-300 ${isOpen ? 'bg-brand-cyan border-brand-cyan text-black' : 'border-white/20 text-white group-hover:border-brand-cyan/50'}`}>
          {isOpen ? <Minus className="w-4 h-4 md:w-5 md:h-5" /> : <Plus className="w-4 h-4 md:w-5 md:h-5" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-4 md:pb-6 text-sm md:text-base text-gray-400 leading-relaxed pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-brand-dark relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Preguntas Frecuentes" 
          subtitle="Resuelve tus dudas" 
        />

        <div className="bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-5 md:p-10 shadow-2xl">
            {faqs.map((faq, index) => (
            <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
            ))}
        </div>
        
        {/* Decorative elements */}
        <div className="mt-8 md:mt-12 text-center">
            <p className="text-gray-500 text-xs md:text-sm flex items-center justify-center gap-2">
                <HelpCircle className="w-4 h-4" />
                ¿Tienes más preguntas? <a href="#booking" className="text-brand-cyan hover:underline underline-offset-4">Hablemos en la demo</a>
            </p>
        </div>
      </div>
    </section>
  );
};