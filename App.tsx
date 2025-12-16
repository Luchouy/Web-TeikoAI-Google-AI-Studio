import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Process } from './components/Process';
import { Manifesto } from './components/Manifesto';
import { Portfolio } from './components/Portfolio';
import { FAQ } from './components/FAQ';
import { Booking } from './components/Booking';
import { Footer } from './components/Footer';
import { ViewType, PageData } from './types';
import { 
  Microscope, Puzzle, Users, BarChart3, Search, FileText, Cpu, Rocket, 
  Clock, AlertTriangle, UserX, 
  CalendarCheck, Filter, Database, Building2, UserCheck, Calendar, Check
} from 'lucide-react';

// --- DATA DEFINITIONS (Derived from PDF) ---

const homeData: PageData = {
  hero: {
    badge: "Metodología TeikoAI v1.0",
    title: <>Transformamos inmobiliarias con <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-blue-400 to-brand-accent">Ecosistemas de IA</span></>,
    description: "Agencia especializada en Automatización Inteligente. No vendemos chatbots genéricos, vendemos soluciones específicas para filtrar leads, agendar visitas y actualizar tu CRM automáticamente.",
    ctaPrimary: "Solución Inmobiliaria",
    ctaSecondary: "Agendar Reunión",
    metrics: [
      { label: 'Metodología', value: '7 Pasos', icon: FileText },
      { label: 'Enfoque', value: 'Medible', icon: BarChart3 },
      { label: 'Soporte', value: '30 Días+', icon: Users },
    ]
  },
  benefits: {
    title: "Filosofía TeikoAI",
    subtitle: "Principios Fundamentales",
    items: [
      { id: 1, title: "Comprensión Profunda", description: "Analizamos a fondo tu proceso de ventas y puntos de dolor antes de proponer nada. Sin esto, la IA no sirve.", icon: Microscope },
      { id: 2, title: "Soluciones a Medida", description: "Diseñamos ecosistemas completos integrados en tu infraestructura, no chatbots genéricos.", icon: Puzzle },
      { id: 3, title: "Desarrollo por Fases", description: "Implementación gradual y validada. Calidad garantizada en cada funcionalidad antes de avanzar.", icon: Users },
      { id: 4, title: "Resultados Medibles", description: "Buscamos un Win-Win. Nos enfocamos en métricas claras de rendimiento que validan el éxito de la implementación.", icon: BarChart3 }
    ]
  },
  process: {
    title: "Metodología TeikoAI",
    subtitle: "Proceso de 7 Pasos",
    steps: [
      { id: 1, title: "Auditar", description: "Entender el problema real del negocio.", icon: Search },
      { id: 2, title: "Formalizar", description: "Contrato + Onboarding + Accesos.", icon: FileText },
      { id: 3, title: "Planificar", description: "Kick-Off + Roadmap detallado.", icon: CalendarCheck },
      { id: 4, title: "Construir & Lanzar", description: "Desarrollo por fases, testing y optimización intensiva.", icon: Rocket }
    ]
  },
  portfolio: {
    title: "Nuestra Especialidad",
    subtitle: "Enfoque Total",
    items: [
      {
        id: 2,
        title: "Inmobiliarias",
        category: "Gestión de Leads",
        description: "Filtrado de curiosos, calificación de prospectos y agendamiento automático de visitas en tu calendario.",
        tags: ["Más Visitas", "Menos Pérdida de Tiempo"],
        metrics: "Ver Solución",
        visual: (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-900/10 to-teal-900/10 group-hover:from-emerald-900/20 group-hover:to-teal-900/20 transition-all duration-500">
             <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 blur-[40px] rounded-full animate-pulse-slow" />
              <Building2 className="w-32 h-32 text-emerald-400 relative z-10 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:scale-110 transition-transform duration-500 animate-float" strokeWidth={1} />
            </div>
          </div>
        )
      }
    ]
  }
};

const realEstateData: PageData = {
  hero: {
    badge: "Oferta Inmobiliaria 2025",
    title: <>Atendé el 100% de consultas y <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-blue-400 to-brand-accent">agenda visitas en automático</span></>,
    description: "Filtramos curiosos de leads reales. Nuestro Agente califica siguiendo tus reglas de negocio y criterios específicos, y agenda directamente en tu calendario sin que muevas un dedo.",
    ctaPrimary: "Agendar Reunión",
    ctaSecondary: "Ver Detalles",
    metrics: [
      { label: 'Filtrado', value: 'Automático', icon: Filter },
      { label: 'Agenda', value: 'Sync', icon: CalendarCheck },
      { label: 'CRM', value: 'Actualizado', icon: Database },
    ]
  },
  benefits: {
    title: "El Problema Inmobiliario",
    subtitle: "¿Te suena familiar?",
    items: [
      { id: 1, title: "Leads Basura (70%)", description: "Perdés horas hablando con gente que no tiene intención real o presupuesto.", icon: UserX },
      { id: 2, title: "Respuesta Tardía", description: "Si no respondes en el momento, el lead escribe a otra inmobiliaria. Oportunidad perdida.", icon: Clock },
      { id: 3, title: "Agenda Caótica", description: "Coordinar visitas manualmente es un dolor de cabeza y genera inasistencias.", icon: AlertTriangle },
      { id: 4, title: "CRM Desactualizado", description: "Los datos quedan en WhatsApp y nadie los pasa al sistema. Pierdes trazabilidad.", icon: Database }
    ]
  },
  process: {
    title: "Plan de Implementación",
    subtitle: "30 Días para Transformar",
    steps: [
      { id: 1, title: "Diseño de Flujo", description: "Semana 1. Definimos las preguntas de calificación y los criterios exactos que hacen a un lead 'válido' para tu agencia.", icon: Search },
      { id: 2, title: "Configuración", description: "Semana 2. Conexión de WhatsApp API, Chatwoot y tu CRM inmobiliario.", icon: Puzzle },
      { id: 3, title: "Workflows & Calendar", description: "Semana 3. Automatización de agendamiento en Google Calendar y seguimiento.", icon: Cpu },
      { id: 4, title: "Capacitación", description: "Semana 4. Pruebas funcionales y entrenamiento a tu equipo de agentes.", icon: Users }
    ]
  },
  portfolio: {
    title: "Capacidades del Sistema",
    subtitle: "Tu Nuevo Agente Estrella",
    items: [
      {
        id: 1,
        title: "Cualificación Inteligente",
        category: "Filtrado",
        description: "El agente entrevista al lead validando los requisitos que tu inmobiliaria considera clave. Solo te pasa prospectos que cumplen tu estándar.",
        tags: ["Calidad", "Ahorro de Tiempo"],
        metrics: "Leads Reales",
        visual: (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-dark to-orange-900/10">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500/10 blur-[40px] rounded-full" />
              <UserCheck className="w-32 h-32 text-orange-400 group-hover:text-orange-300 transition-colors duration-500 animate-float" strokeWidth={1} />
              <div className="absolute bottom-0 right-0 p-2 bg-brand-dark rounded-full border border-white/10 shadow-lg">
                <Filter className="w-6 h-6 text-orange-500" />
              </div>
            </div>
          </div>
        )
      },
      {
        id: 2,
        title: "Agendamiento Visitas",
        category: "Agenda",
        description: "Se conecta a tu Google Calendar, ofrece horarios libres y confirma la cita automáticamente.",
        tags: ["Google Calendar", "Sin Fricción"],
        metrics: "+ Visitas",
        visual: (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-900/10 to-brand-dark">
             <div className="relative">
               <Calendar className="w-32 h-32 text-red-400 group-hover:scale-105 transition-transform duration-500" strokeWidth={1} />
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-4xl font-bold text-red-200/80">24</span>
               </div>
               <div className="absolute -top-2 -right-2 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                 <Check className="w-6 h-6 text-white" />
               </div>
             </div>
          </div>
        )
      },
      {
        id: 3,
        title: "Registro en CRM",
        category: "Datos",
        description: "Toda la información recolectada se envía a tu CRM. Ficha completa del cliente sin escribir nada.",
        tags: ["Tokko", "Salesforce", "HubSpot"],
        metrics: "Orden Total",
        visual: (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-900/10 to-brand-dark">
             <div className="relative">
               <div className="absolute inset-0 bg-cyan-500/10 blur-[40px] rounded-full" />
               <Database className="w-32 h-32 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-500 animate-float" strokeWidth={1} />
               <div className="absolute inset-x-0 top-1/2 h-0.5 bg-cyan-400/50 blur-[2px] animate-pulse" />
             </div>
          </div>
        )
      }
    ]
  }
};


function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  const getData = () => {
    switch (currentView) {
      case 'real-estate': return realEstateData;
      default: return homeData;
    }
  };

  const data = getData();

  const handlePrimaryHeroClick = () => {
    if (currentView === 'home') {
      setCurrentView('real-estate');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // In specific views, Primary CTA is "Agendar Reunión"
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSecondaryHeroClick = () => {
    if (currentView === 'home') {
       // In Home, secondary is "Agendar Reunión"
       document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // In Real Estate, secondary is "Ver Detalles" (Scroll to Process)
      document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePortfolioItemClick = (item: any) => {
    // Only in Home view, clicking portfolio items switches views
    if (currentView === 'home') {
      if (item.title === 'Inmobiliarias') {
        setCurrentView('real-estate');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-cyan selection:text-black">
      <Navbar currentView={currentView} onChangeView={setCurrentView} />
      <main>
        {currentView === 'manifesto' ? (
          <>
            <Manifesto />
            <Footer />
          </>
        ) : (
          <>
            <Hero 
              key={`hero-${currentView}`} 
              data={data.hero} 
              onPrimaryClick={handlePrimaryHeroClick}
              onSecondaryClick={handleSecondaryHeroClick}
            />
            <Benefits 
              key={`benefits-${currentView}`} 
              data={data.benefits} 
            />
            <Process 
              key={`process-${currentView}`} 
              data={data.process} 
            />
            <Portfolio 
              key={`portfolio-${currentView}`} 
              data={data.portfolio} 
              onItemClick={handlePortfolioItemClick}
            />
            <Booking />
            <FAQ />
            <Footer />
          </>
        )}
      </main>
    </div>
  );
}

export default App;