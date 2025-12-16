import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-semibold transition-all duration-300 rounded-full tracking-wide focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-cyan text-white hover:bg-brand-cyanGlow shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] border border-transparent hover:-translate-y-1",
    secondary: "bg-white text-brand-dark hover:bg-gray-100 shadow-lg border border-transparent hover:-translate-y-1",
    outline: "bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-brand-cyan/50 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] backdrop-blur-sm"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};