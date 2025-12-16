import React from 'react';
import { Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-3">
             {/* Custom TeikoAI Logo SVG Small - Finer Wireframe Version */}
             <svg 
               viewBox="0 0 100 110" 
               fill="none" 
               xmlns="http://www.w3.org/2000/svg" 
               className="w-8 h-8 text-brand-cyan"
             >
              <path 
                d="M50 5L93.3013 30V80L50 105L6.69873 80V30L50 5Z" 
                stroke="currentColor" 
                strokeWidth="4"
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M50 30L71.6506 42.5V67.5L50 80L28.3494 67.5V42.5L50 30Z" 
                stroke="currentColor" 
                strokeWidth="4"
                strokeLinecap="round" 
                strokeLinejoin="round"
                opacity="0.8"
              />
            </svg>
            <span className="text-xl font-display font-bold text-white">TeikoAI</span>
          </div>

          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} TeikoAI. Todos los derechos reservados.
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:luciano@teikoai.com" className="text-gray-400 hover:text-brand-cyan transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center md:text-right">
          <a href="#" className="text-xs text-gray-600 hover:text-gray-400 mr-4">Aviso Legal</a>
          <a href="#" className="text-xs text-gray-600 hover:text-gray-400">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  );
};