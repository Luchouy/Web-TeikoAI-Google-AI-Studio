import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { PageData } from '../types';

interface HeroProps {
  data: PageData['hero'];
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ data, onPrimaryClick, onSecondaryClick }) => {
  const { scrollY } = useScroll();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Parallax for text content
  const yContent = useTransform(scrollY, [0, 500], [0, 100]);
  const opacityContent = useTransform(scrollY, [0, 300], [1, 0]);

  // Canvas Animation Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false }); 
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Optimized Node configuration
    const particleCount = window.innerWidth < 768 ? 30 : 80; 
    const connectionDistance = window.innerWidth < 768 ? 120 : 170;
    const connectionDistanceSq = connectionDistance * connectionDistance;
    
    const particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 2 + 1.5; 
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, 0.8)`;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationFrameId: number;

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < connectionDistanceSq) {
             const opacity = 1 - (distSq / connectionDistanceSq);
             if (opacity > 0) {
               ctx.beginPath();
               ctx.strokeStyle = `rgba(147, 197, 253, ${opacity * 0.4})`; 
               ctx.moveTo(p1.x, p1.y);
               ctx.lineTo(p2.x, p2.y);
               ctx.stroke();
             }
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-12 md:pt-20 overflow-hidden">
      {/* 1. Base Dark Background */}
      <div className="absolute inset-0 bg-brand-dark z-0" />

      {/* 2. Living System Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-50 md:opacity-70"
      />

      {/* 3. Subtle Vignette */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-dark/30 via-transparent to-brand-dark pointer-events-none" />
      
      {/* 4. Center Glow - Reduced on mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[500px] bg-brand-dark/60 blur-[60px] md:blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={data.badge}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-900/30 border border-brand-cyan/40 mb-6 md:mb-8 backdrop-blur-md mx-auto hover:bg-blue-900/40 transition-colors"
              >
                <span className="flex h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_10px_#3B82F6]" />
                <span className="text-[10px] md:text-sm font-medium text-blue-100/90 tracking-wide uppercase">
                  {data.badge}
                </span>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key="title-content"
                style={{ y: yContent, opacity: opacityContent }}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto"
              >
                {/* Responsive Typography: 4xl on mobile, 7xl on desktop */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white leading-[1.1] mb-6 md:mb-8 drop-shadow-2xl px-2">
                  {data.title}
                </h1>

                <div className="text-base sm:text-lg md:text-xl xl:text-2xl text-blue-100/80 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed font-medium px-4">
                  {data.description}
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            >
              {/* Primary Action - Full width on mobile */}
              <div className="w-full sm:w-auto">
                <Button 
                  onClick={onPrimaryClick}
                  className="w-full sm:w-auto gap-2 shadow-[0_0_25px_rgba(59,130,246,0.5)] px-6 py-3.5 md:px-8 md:py-4 text-base md:text-lg"
                >
                  {data.ctaPrimary} <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </div>

              {/* Secondary Action - Full width on mobile */}
              <div className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  onClick={onSecondaryClick} 
                  className="w-full sm:w-auto gap-2 bg-black/40 backdrop-blur-sm px-6 py-3.5 md:px-8 md:py-4 text-base md:text-lg"
                >
                  {data.ctaSecondary} <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </div>
            </motion.div>

            {/* Metrics - Stacked better on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1, type: "spring" }}
              className="mt-16 md:mt-24 flex flex-wrap gap-6 md:gap-16 justify-center border-t border-white/10 pt-8 md:pt-10 max-w-4xl mx-auto px-4"
            >
              {data.metrics.map((item, index) => (
                <div key={index} className="flex items-center gap-3 md:gap-4 group min-w-[140px] md:min-w-0">
                  <div className="p-3 md:p-4 bg-brand-cyan/10 rounded-xl border border-brand-cyan/20 group-hover:border-brand-cyan/50 group-hover:bg-brand-cyan/20 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                    <item.icon className="w-6 h-6 md:w-8 md:h-8 text-brand-cyan group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">{item.value}</span>
                    <span className="text-[10px] md:text-sm text-blue-200/70 uppercase tracking-widest font-semibold">{item.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>
      </div>
    </section>
  );
};